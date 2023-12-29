<script setup lang="ts">
import type { Category } from '@prisma/client'


type InputBody = {
    user_id: string
    amount?: number | string
    category?: string
    category_id?: number
    date?: Date
    memo: string
}

const user = useUser()

const inputBody = ref<InputBody>({
    user_id: user.value.uid,
    memo: ''
})

const { data: categories } = useFetch<Category[]>(`api/users/${user.value.uid}/categories`, {
    lazy: true,
    key: 'categories',
})

const categoryNames = computed(() => {
    if (categories.value) {
        return categories.value.map(category => category.name)
    }
    return []
})


const handleClick = async () => {
    const selectedCategory = categories.value!.find(category => category.name === inputBody.value.category)!
    inputBody.value.category_id = selectedCategory.id

    inputBody.value.amount = Number(inputBody.value.amount)
    inputBody.value.date?.setUTCHours(24)

    const { data, error } = await useFetch(`api/users/${user.value.uid}/expenses`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${await user.value.getIdToken(true)}`
        },
        body: inputBody.value
    })
    if (data.value) {
        inputBody.value = {
            user_id: user.value.uid,
            memo: ''
        }
        console.log(data.value)
    }
    if (error.value) console.log(error.value)
}

</script>

<template>
    <div class="page-inner">
        <h2>入力</h2>
        <form>
            <div class="date-container">
                <v-date-picker hide-header v-model="inputBody.date" width="100%"></v-date-picker>
            </div>
            <v-select label="カテゴリー" v-model="inputBody.category" :items="categoryNames" bg-color="#fff"></v-select>
            <v-text-field label="金額 *" v-model="inputBody.amount" inputmode="numeric" bg-color="#fff"></v-text-field>
            <v-textarea label="メモ" v-model="inputBody.memo" bg-color="#fff"></v-textarea>
            <v-btn width="100%" @click="handleClick">保存</v-btn>
        </form>
    </div>
</template>

<style lang="scss" scoped>
form {
    margin-top: 16px;
}

.date-container {
    margin-bottom: 22px;
}
</style>