import { apps, credential, initializeApp } from 'firebase-admin'

export default defineNuxtPlugin(nuxtApp => {
    if (!apps.length) {
        const serviceAccount = JSON.parse(
            process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
        )
        initializeApp({ credential: credential.cert(serviceAccount) })
    }
})