import { getAuth } from 'firebase-admin/auth'
import type { H3Event } from 'h3'

export const verifyFirebaseToken = async (event: H3Event, id: string) => {
    const auth = getAuth()

    const authHeader = event.node.req.headers.authorization
    if (!authHeader) {
        setResponseStatus(event, 401)
        throw new Error('authorization header is undefined')
    }

    const token = authHeader!.split('Bearer ')[1]

    try {
        const decoded = await auth.verifyIdToken(token)
        if (decoded.uid === id) {
            return 'OK'
        } else {
            throw new Error()
        }
    } catch (err) {
        setResponseStatus(event, 500)
        throw new Error('failed verify token')
    }
}
