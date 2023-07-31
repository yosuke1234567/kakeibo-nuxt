<script setup lang="ts">
import { getAuth, GoogleAuthProvider, signInWithRedirect } from '@firebase/auth'

const auth = getAuth()
const provider = new GoogleAuthProvider()

const signIn = () => {
    signInWithRedirect(auth, provider)
}

const router = useRouter()

const userId = ref('')
const pass = ref('')
const hasPass = ref(true)

const errMsg = ref('')
const isLoad = ref(false)

const confirmGuest = ref(false)
</script>

<template>
    <div class="page-inner">
        <h2>サインイン</h2>
        <v-btn @click="signIn" class="signin-btn">
            <img src="~/assets/google.svg" alt="">
            Googleでログイン
        </v-btn>
    </div>
</template>

<style lang="scss" scoped>
.signin-btn {
    padding: 1em 1.5em;
    height: auto;

    img {
        width: 18px;
        height: 18px;
        margin-right: 1em;
    }
}
</style>