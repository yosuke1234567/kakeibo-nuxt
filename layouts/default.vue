<script setup lang="ts">
import { getAuth, onAuthStateChanged } from '@firebase/auth'

const auth = getAuth()
const router = useRouter()
const route = useRoute()

const isAuth = ref<boolean>()

const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
        isAuth.value = true
        router.replace('/home')
    } else {
        isAuth.value = false
        router.replace('/signin')
    }
})

onBeforeUnmount(()=> {
    console.log('before unmount, unsubscribe.')
    unsubscribe()
})

</script>

<template>
    <div v-if="isAuth === false" class="page-default">
        <slot></slot>
    </div>

    <v-layout v-else-if="isAuth">
        <v-main class="page-user">
            <slot></slot>
        </v-main>
        <v-bottom-navigation :elevation="0" class="nav">
            <v-btn to="/home" replace>
                <v-icon icon="fa:fas fa-house" class="nav-icon"></v-icon>
                ホーム
            </v-btn>
            <v-btn to="/input" replace>
                <v-icon icon="fa:fas fa-pen-to-square" class="nav-icon"></v-icon>
                入力
            </v-btn>
            <v-btn to="/stats" replace>
                <v-icon icon="fa:fas fa-chart-simple" class="nav-icon"></v-icon>
                統計
            </v-btn>
            <v-btn to="/mypage" replace>
                <v-icon icon="fa:fas fa-user" class="nav-icon"></v-icon>
                マイページ
            </v-btn>
        </v-bottom-navigation>
    </v-layout>

    <div v-else class="page-loading">
        <v-progress-circular indeterminate></v-progress-circular>
    </div>
</template>

<style lang="scss" scoped>
.page-default {
    padding-top: env(safe-area-inset-top);
    padding-right: env(safe-area-inset-right);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
}

.page-user {
    padding-top: env(safe-area-inset-top);
    padding-right: env(safe-area-inset-right);
    padding-left: env(safe-area-inset-left);
}

.nav {
    width: 100%;
    border-top: 1px solid #efedeb;
}

.nav-icon {
    font-size: 1.5em;
    margin-bottom: 0.2em;
}
</style>