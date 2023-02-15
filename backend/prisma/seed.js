const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const alex = await prisma.user.upsert({
    where: { email: 'gonchxrov@gmail.com' },
    update: {},
    create: {
      firstName: 'Alex',
      lastName: 'Goncharov',
      email: 'gonchxrov@gmail.com',
    },
  })

  console.log({ alex })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })