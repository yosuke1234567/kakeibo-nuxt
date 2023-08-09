<script setup lang="ts">
import { getAuth } from '@firebase/auth'

const auth = getAuth()
const router = useRouter()

const signOut = () => {
    auth.signOut()
    router.replace('/signin')
}
</script>

<template>
    <div class="page-inner">
        <h2>マイページ</h2>
        <v-btn @click="signOut">
            サインアウト
        </v-btn>
    </div>
</template>

<style lang="scss" scoped></style>