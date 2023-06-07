import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { userId, achievementName } = req.body;

  try {
        const achievement = await prisma.achievement.findFirst({
      where: {
        userId: parseInt(userId),
        name: achievementName,
      },
    });

    if (achievement) {
      const updatedAchievement = await prisma.achievement.update({
        where: {
          id: achievement.id,
        },
        data: {
          collected: true,
        },
      });


      res.status(200).json({ success: true, achievement: updatedAchievement });
    } else {
      res.status(404).json({ error: 'Achievement not found' });
    }
  } catch (error) {
    console.error('Failed to update achievement:', error);
    res.status(500).json({ error: 'Failed to update achievement' });
  }
}
