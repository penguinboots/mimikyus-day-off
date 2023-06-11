import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { userId } = req.body;
  const achievementName = 'something shiny'; // Replace with the actual achievement name

  try {
    const achievement = await prisma.achievement.updateMany({
      where: {
        userId: parseInt(userId),
        name: achievementName,
      },
      data: {
        collected: true,
      },
    });

    res.status(200).json({ success: true, achievement });
  } catch (error) {
    console.error('Failed to update achievement:', error);
    res.status(500).json({ error: 'Failed to update achievement' });
  }
}
