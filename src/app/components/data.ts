
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getUser() {
  // ... you will write your Prisma Client queries here
  // const allUsers = await prisma.user.findMany()


  // console.log(allUsers)
//   const post: User = await prisma.user.findUnique()
//   return {post}
}

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
