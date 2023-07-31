<script setup lang="ts">
import { getAuth, onAuthStateChanged } from '@firebase/auth'

const auth = getAuth()
const router = useRouter()

const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
        router.push('/home')
    } else {
        router.push('/signin')
    }
})

onBeforeUnmount(()=> {
    console.log('before unmount, unsubscribe.')
    unsubscribe()
})
</script>

<template>
    <div class="page-view">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.page-view {
    padding-top: env(safe-area-inset-top);
    padding-right: env(safe-area-inset-right);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
}
</style>