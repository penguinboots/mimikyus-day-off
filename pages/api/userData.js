import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // GET method for achievements
  if (req.method === "GET") {
    // write this
  }

  // POST method for achievements
  if (req.method !== 'POST') {
    // write this
  }
  const { auth0Sub } = req.query;

  try {
    const db_user = await prisma.user.findUnique({
      where: { auth0Sub },
    });

    if (!db_user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

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
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
}