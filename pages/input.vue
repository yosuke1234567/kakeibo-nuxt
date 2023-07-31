<script setup lang="ts">
definePageMeta({
    layout: 'user'
})
</script>

<template>
    <div class="page-inner">
        <h2>入力</h2>
        <form>
            <v-text-field label="金額 *" inputmode="numeric" bg-color="#fff"></v-text-field>
            <v-textarea label="メモ" bg-color="#fff"></v-textarea>
        </form>
    </div>
</template>

<style lang="scss" scoped>
form {
    margin-top: 16px;
}
</style>