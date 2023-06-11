import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUserData = async (auth0Sub) => {
  try {
    const dbUser = await prisma.user.findUnique({
      where: { auth0Sub },
    });
    const dbCharacter = await prisma.character.findFirst({
      where: { userId: dbUser.id },
    });
    const dbAchievements = await prisma.achievement.findMany({
      where: { userId: dbUser.id },
    });
    return { dbUser, dbCharacter, dbAchievements };
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};

export const createUser = async (userData) => {
  try {
    const dbUser = await prisma.user.create({ data: userData });
    const dbCharacter = await prisma.character.create({
      data: {
        move_1: 'Move 1',
        move_2: 'Move 2',
        move_3: 'Move 3',
        move_4: 'Move 4',
        userId: dbUser.id,
      },
    });
    const achievementArray = Object.values(achievements);
    const dbAchievements = await Promise.all(
      achievementArray.map(async (achievement) => {
        return prisma.achievement.create({
          data: {
            name: achievement.name,
            collected: achievement.collected,
            date_get: null,
            userId: dbUser.id,
          },
        });
      })
    );
    return { dbUser, dbCharacter, dbAchievements };
  } catch (error) {
    throw new Error('Failed to create user');
  }
};

export const updateAchievement = async (userId, achievementName) => {
  try {
    await prisma.achievement.update({
      where: { userId_name: { userId, name: achievementName } },
      data: { collected: true },
    });
  } catch (error) {
    throw new Error('Failed to update achievement');
  }
};
