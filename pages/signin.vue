<script setup lang="ts">
import { getAuth, GoogleAuthProvider, signInWithRedirect, signInAnonymously } from '@firebase/auth'

const auth = getAuth()
const provider = new GoogleAuthProvider()
const router = useRouter()
const isLoad = ref(false)

const onGoogleSignIn = () => {
    signInWithRedirect(auth, provider)
}

const onGuestSignIn = () => {
    signInAnonymously(auth)
    console.log('sign in as a guest')
    isLoad.value = true
}

const errMsg = ref('')

const confirmGuest = ref(false)
</script>

<template>
    <div class="page-inner">
        <div class="card">
            <h2>サインイン</h2>
            <v-btn @click="onGoogleSignIn" variant="outlined" class="signin-btn">
                <img src="~/assets/google.svg" alt="">
                Googleでサインイン
            </v-btn>
            <v-btn @click="confirmGuest = true" flat class="signin-btn">
                ゲストとして利用する
            </v-btn>
            <v-dialog v-model="confirmGuest" width="auto">
                <v-card>
                    <v-card-text>
                        <p>ゲストとして利用します。</p>
                        <p>一度サインアウトすると入力したデータは使用できなくなります。</p>
                    </v-card-text>
                    <v-card-actions class="guest-actions">
                        <v-btn @click="confirmGuest = false">キャンセル</v-btn>
                        <v-btn @click="onGuestSignIn">OK</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </div>
    <v-overlay v-model="isLoad" class="page-loading">
        <v-progress-circular indeterminate />
    </v-overlay>
</template>

<style lang="scss" scoped>
.page-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    height: 100svh;
    padding: 0;
}

.card {
    width: 100%;
    padding: 1.5rem;
    text-align: center;
    border: none;
    box-shadow: 0 8px 24px #00000014;
}

h2 {
    margin-bottom: 1em;
}

.signin-btn {
    height: auto;
    padding: 1em 2em;
    border-color: #cfcdcb;

    img {
        width: 18px;
        height: 18px;
        margin-right: 1em;
        pointer-events: none;
    }

    &:last-child {
        margin-top: 1.5em;
    }
}

.guest-actions {
    justify-content: flex-end;
}
</style>