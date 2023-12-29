<script setup lang="ts">
import { getAuth } from '@firebase/auth'
import type { Category } from '@prisma/client'

const auth = getAuth()
const user = useUser()

const { data: categories } = await useFetch<Category[]>(`api/users/${user.value.uid}/categories`, {
    lazy: true,
    key: 'categories'
})

const signOut = () => {
    auth.signOut()
}
</script>

<template>
    <div class="page-inner">
        <h2>マイページ</h2>
        <div class="inner">
            <v-btn @click="signOut">
                サインアウト
            </v-btn>
            <ul v-for="category in categories">
                <li>
                    <span :style="{display: 'inline-block', backgroundColor: category.color, padding: '8px'}"></span>
                    {{ category.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.inner {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
}
</style>