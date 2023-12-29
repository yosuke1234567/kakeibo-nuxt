import { PrismaClient } from '@prisma/client'


export default defineEventHandler(async (event) => {
    const id = event.context.params!.id

    const prisma = new PrismaClient()
    try {
        const user = await prisma.user.findUnique({ where: { id } })
        const categories = await prisma.category.findMany({ where: { user_id: id } })

        if (user) {
            const orderedCategories = user.category_order.map(id => (
                categories.find(category => category.id === id)!
            ))
            prisma.$disconnect()
            return orderedCategories
        }
    } catch {
        prisma.$disconnect()
        setResponseStatus(event, 500)
    }
})