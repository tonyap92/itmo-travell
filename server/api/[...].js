import { createRouter, defineEventHandler, useBase } from 'h3'
import { PrismaClient } from '@prisma/client'

const router = createRouter()
const prisma = new PrismaClient()
router.get(
  '/products',
  defineEventHandler(async (event) => {
    return await prisma.product.findMany()
  })
)

router.get(
  '/product/:id',
  defineEventHandler(async (event) => {
    return await prisma.product.findUnique({
      where: {
        id: parseInt(event.context.params.id),
      },
    })
  })
)

router.get(
  '/places',
  defineEventHandler(async (event) => {
    return await prisma.place.findMany()
  })
)

router.get(
  '/place/:id',
  defineEventHandler(async (event) => {
    return await prisma.place.findUnique({
      where: {
        id: parseInt(event.context.params.id),
      },
    })
  })
)

router.post(
  '/post',
  defineEventHandler(async (event) => {
    const body = await readBody(event)
    return await prisma.post.create({
      data: {
        content: body.content,
        authorName: body.authorName,
        authorEmail: body.authorEmail,
        published: true,
        place: {
          connect: body.placeId
            ? {
                id: body.placeId,
              }
            : undefined,
        },
      },
    })
  })
)

router.get(
  '/posts/:placeId',
  defineEventHandler(async (event) => {
    return await prisma.post.findMany({
      where: {
        placeId: parseInt(event.context.params.placeId),
      },
    })
  })
)
export default useBase('/api', router.handler)
