const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

// pull user and their achievements
async function getUserAchievements(userId) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      achievements: {
        include: {
          achievement: true
        }
      }
    }
  });

  // throw error if user is not found
  if (!user) {
    throw new Error(`User with ID ${userId} not found.`);
  }

  // map over this users achievements
  const achievements = user.achievements.map((achieved) => ({
    id: achieved.achievementId,
    date_get: achieved.date_get,
    collected: achieved.collected,
    ...achieved.achievement
  }));

  return achievements;
}

async function main() {
  try {
    // create a user with an achievement
    const user = await prisma.user.create({
      // data for the new user entered here
      data: {
        email: "example@example.com",
        auth0Sub: "auth0sub123",
        password: "password123",
        name: "John Doe",
        // data for the new user's achievements
        achievements: {
          create: [
            {
              date_get: new Date(),
              achievement: {
                create: {
                  achievement_name: "First Achievement",
                  achievement_image: "achievement_image_url",
                  achievement_description: "Achievement description"
                }
              },
              collected: false
            }
          ]
        },
        // data for new user's characters
        Character: {
          create: {
            species: "Species",
            move_1: "Move 1",
            move_2: "Move 2",
            move_3: "Move 3",
            move_4: "Move 4",
            level: 50,
            hp_stat: 100,
            attack_stat: 80,
            defense_stat: 70,
            spatk_stat: 90,
            spdef_stat: 80,
            speed_stat: 100
          }
        }
      }
    });

    // show the newly created user
    console.log("Created user:", user);

    const userId = user.id;
    const achievements = await getUserAchievements(userId);

    // show us the achievements for that user
    console.log("User achievements:", achievements);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
  }
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

module.exports = {
  main,
  getUserAchievements
};