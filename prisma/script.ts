// import { PrismaClient } from '@prisma/client'
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {

  // baseline creation of a user
  const user = await prisma.user.create(
    {
      data: {
        email: 'Bob',
        password: 'POWER 1',
        name: 'POWER 2',
      },
    }
  )
  console.log(user)

  //baseline creation of a character once user has been created
  const character = await prisma.character.create(
    {
      data: {
        user: {
          connect: {
            id: 1
          }
        },
        species: 'Fairy',
        move_1: 'POWER 1',
        move_2: 'POWER 2',
        move_3: 'POWER 3',
        move_4: 'POWER 4',
        level: 5,
        hp_stat: 100,
        attack_stat: 30,
        defense_stat: 5,
        spatk_stat: 2,
        spdef_stat: 0,
        speed_stat: 0
      },
    }
  )
  console.log(character)

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