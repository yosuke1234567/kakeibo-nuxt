<script setup lang="ts">
import { getAuth } from '@firebase/auth'

const userStore = useUser()

;(async () => {
    // const token = await userStore.value.getIdToken(true)
    // const headers = { 'Authorization': `Bearer ${token}` }
    // const userData = await useAsyncData(
    //     'dbUser',
    //     () => $fetch(`/api/users/${userStore.value.uid}`, { headers }),
    //     // { server: false, lazy: true }
    // )
}
)()
</script>

<template>
    <div class="page-inner">
        <h2>今月の出費</h2>
        <div class="card">今月のデータはありません</div>
        <h2>最近の記録</h2>
    </div>
</template>

<style lang="scss" scoped>
h2 {
    margin-bottom: 16px;
}

.card {
    min-height: 176px;
    margin-bottom: 40px;
}
</style>