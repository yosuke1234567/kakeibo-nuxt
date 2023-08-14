import { initializeApp } from '@firebase/app'

export default defineNuxtPlugin(nuxtApp => {
    const firebaseConfig = {
        apiKey: "AIzaSyC7Ceb0lp1mbkiJ56xyOtso4SI_uMi1Law",
        authDomain: "nuxt-kakeibo-auth.firebaseapp.com",
        projectId: "nuxt-kakeibo-auth",
        storageBucket: "nuxt-kakeibo-auth.appspot.com",
        messagingSenderId: "809429501395",
        appId: "1:809429501395:web:a5f5c606114ab4be3a9b26"
    }

    initializeApp(firebaseConfig)
})