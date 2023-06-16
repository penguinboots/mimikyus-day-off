import prisma from "@/prisma";

export default async function handler(req, res) {
  // GET request for achievements
  if (req.method === "GET") {
    const { auth0Sub } = req.query;
    const db_user = await prisma.user.findUnique({
      where: { auth0Sub: auth0Sub },
    });
    // find achievements
    try {
      const achievements = await prisma.achievement.findMany({
        where: {
          userId: parseInt(db_user.id),
        },
      });
      res.status(200).json({ achievements });
    } catch (error) {
      console.error('Failed to retrieve achievements:', error);
      res.status(500).json({ error: 'Failed to retrieve achievements' });
    }
  }

  // POST request for achievements
  if (req.method === 'POST') {
    const { user, achievementName } = req.body;
    //select user based on sub
    const db_user = await prisma.user.findFirst({
      where: {auth0Sub: user.sub}
    })
    // find achievement using db_user id
    try {
      const achievement = await prisma.achievement.findFirst({
        where: {
          userId: parseInt(db_user.id),
          name: achievementName,
        },
      });
      // update achievement
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
}
