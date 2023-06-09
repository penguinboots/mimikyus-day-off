const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

// pull user and their achievements
async function getUserAchievements(userId) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(userId) },
    include: {
      achievements: true
    }
  });

  return achievements;
}

// find the current user in the database
async function findCurrentUser(sub) {
  const user = await prisma.user.findFirst({
    where: { auth0Sub: sub },
  });

  // throw error if user is not found
  if (!user) {
    throw new Error(`User with sub ${sub} not found.`);
  }

  return user;
}

// find the characters of the current user in the database
async function findUserCharacters(userId) {
  const characters = await prisma.character.findMany({
    where: { userId },
  });

  return characters;
}

let user = null;
let achievements = null;
let userCharacters = null;
let currentUser = null;

async function main() {
  try {
    // create a user with an achievement
    user = await prisma.user.create({
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
              name: "First Achievement",
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
    achievements = await getUserAchievements(userId);

    // show the achievements for that user
    console.log("User achievements:", achievements);

    currentUser = await findCurrentUser(user.auth0Sub);
    console.log("Current user:", currentUser);

    userCharacters = await findUserCharacters(userId);
    console.log("User characters:", userCharacters);
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
  user,
  achievements,
  userCharacters,
  currentUser,
  getUserAchievements,
  findCurrentUser,
  findUserCharacters
};