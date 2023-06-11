import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { auth0Sub } = req.query;

  try {
    let db_user = await prisma.user.findUnique({
      where: { auth0Sub },
    });

    if (!db_user) {
      // User doesn't exist, create a new user
      db_user = await prisma.user.create({
        // data for the new user entered here
        data: {
          email: "example@example.com",
          auth0Sub: auth0Sub,
          password: "password123",
          name: "John Doe",
        },
      });

      // Create character, achievements, and moves
      const db_character = await prisma.character.create({
        data: {
          move_1: "Move 1",
          move_2: "Move 2",
          move_3: "Move 3",
          move_4: "Move 4",
          userId: db_user.id,
        },
      });

      const achievementArray = Object.values(achievements);
      const db_achievements = await Promise.all(
        achievementArray.map((achievement) =>
          prisma.achievement.create({
            data: {
              name: achievement.name,
              collected: achievement.collected,
              date_get: null,
              userId: db_user.id,
            },
          })
        )
      );

      const unlockables = []; // Provide the unlockables array
      const db_moves = await Promise.all(
        unlockables.map((move) =>
          prisma.move.create({
            data: {
              name: move.name,
              collected: move.collected,
              date_get: null,
              userId: db_user.id,
            },
          })
        )
      );

      res.status(200).json({
        db_user,
        db_character,
        db_achievements,
        db_moves,
      });
    } else {
      // User exists, fetch character, achievements, and moves
      const db_character = await prisma.character.findFirst({
        where: { userId: db_user.id },
      });
      const db_achievements = await prisma.achievement.findMany({
        where: { userId: db_user.id },
      });
      const db_moves = await prisma.move.findMany({
        where: { userId: db_user.id },
      });

      res.status(200).json({
        db_user,
        db_character,
        db_achievements,
        db_moves,
      });
    }
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
}
