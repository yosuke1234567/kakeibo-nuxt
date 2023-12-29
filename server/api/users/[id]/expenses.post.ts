import { Expense, PrismaClient } from '@prisma/client'
import { verifyFirebaseToken } from '../../../utils/verifyFirebaseToken'

type InputBody = {
    user_id: string
    amount: number
    category: string
    category_id: number
    date: Date
    memo: string
}

export default defineEventHandler(async (event) => {
    const id = event.context.params!.id
    const verifyResult = await verifyFirebaseToken(event, id)

    const body: InputBody = await readBody(event)
    console.log(body)

    if (verifyResult && body) {
        const prisma = new PrismaClient()
        try {
            await prisma.expense.create({
                data: {
                    user_id: body.user_id,
                    amount: body.amount,
                    category: body.category,
                    date: body.date,
                    memo: body.memo,
                }
            })

            const d = new Date(body.date).setDate(1)
            const year_month = new Date(d)

            const res = await prisma.stat.findFirst({
                where: {
                    user_id: id,
                    category_id: body.category_id,
                    year_month
                }
            })

            if (res) {
                prisma.stat.update({
                    where: { id: res.id },
                    data: { amount: (res.amount + body.amount) }
                }).catch(err => console.log(err))
            } else {
                prisma.stat.create({
                    data: {
                        user_id: id,
                        category_id: body.category_id,
                        year_month,
                        amount: body.amount
                    }
                }).catch(err => console.log(err))
            }

            prisma.$disconnect()
            return 'OK'
        } catch (err) {
            prisma.$disconnect()
            console.log(err)
            throw new Error()
        }
    }
})