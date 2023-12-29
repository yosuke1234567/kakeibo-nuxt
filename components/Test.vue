<script setup lang="ts">
interface Props {
    num: number
}
const props = defineProps<Props>()

const x = computed(() => props.num)

const y = {
    value: props.num
}
onBeforeUpdate(() => y.value = props.num)

const z = props.num
</script>

<template>
    <h2>子コンポーネントです。</h2>
    <p>props : {{ props.num }}</p>
    <p>computed : {{ x }}</p>
    <p>定数+onBeforeUpdate : {{ y.value }}</p>
    <p>定数 : {{ z }}</p>
</template>

<style lang="scss" scoped>

</style>