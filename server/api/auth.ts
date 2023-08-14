import { getAuth } from 'firebase-admin/auth'

export default defineEventHandler(async (event) => {
    const auth = getAuth()

    const body = await readBody(event)
    
    try {
        const decoded = await auth.verifyIdToken(body)
        console.log(decoded)
        return 'ok'
    } catch (err) {
        return err
    }
})