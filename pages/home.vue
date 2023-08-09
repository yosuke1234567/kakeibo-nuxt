<script setup lang="ts">
import { getAuth } from '@firebase/auth'


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