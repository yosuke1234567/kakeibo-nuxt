import { PrismaClient } from '@prisma/client'
import { verifyFirebaseToken } from '../../../utils/verifyFirebaseToken'
import { palette } from '../../../utils/palette'

const prisma = new PrismaClient()

const createUser = async (id: string) => {
    const res = await prisma.user.findUnique({ where: { id } })

    if (res === null) {
        await prisma.user.create({
            data: {
                id,
                category_order: []
            }
        })
        console.log('create new user')
    }
}

const createCategories = async (id: string) => {
    const res = await prisma.category.findMany({ where: { user_id: id } })

    if (!res.length) {
        await prisma.category.createMany({
            data: [
                { user_id: id, name: '食費', color: palette[0] },
                { user_id: id, name: '日用品', color: palette[1] },
                { user_id: id, name: '交際費', color: palette[2] },
                { user_id: id, name: '交通費', color: palette[4] },
                { user_id: id, name: '衣服', color: palette[5] },
                { user_id: id, name: '水道光熱費', color: palette[6] },
                { user_id: id, name: 'その他', color: palette[15] }
            ]
        })
        console.log('create new categories')

        const newCategories = await prisma.category.findMany({ where: { user_id: id } })
        const category_order = newCategories.map(r => r.id)
        await prisma.user.update({
            where: { id },
            data: { category_order }
        })
    }
}

export default defineEventHandler(async (event) => {
    const id = event.context.params!.id
    const verifyResult = await verifyFirebaseToken(event, id)

    if (verifyResult) {
        try {
            await createUser(id)
            await createCategories(id)

            prisma.$disconnect()
            return 'OK'
        } catch (err) {
            prisma.$disconnect()
            console.log(err)
        }
    }
})