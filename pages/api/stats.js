import prisma from "@/prisma";

export default async function handler(req, res) {
  // GET request for stats
  if (req.method === "GET") {
    const { auth0Sub }  = req.query;
    const db_user = await prisma.user.findUnique({
      where: { auth0Sub: auth0Sub },
    });
    // find characters
    try {
      const characters = await prisma.character.findMany({
        where: {
          userId: parseInt(db_user.id),
        },
      });

      res.status(200).json({ characters });
    } catch (error) {
      console.error('Failed to retrieve characters:', error);
      res.status(500).json({ error: 'Failed to retrieve characters' });
    }
  }

  // POST request for stats
  if (req.method === 'POST') {
    const { user, newStatsObj } = req.body;
    const db_user = await prisma.user.findFirst({
      where: {auth0Sub: user.sub}
    })
    // find user
    try {
      // update moves per array from paramater
      const character = await prisma.character.updateMany({
        where: { userId: db_user.id },
        data:{
          hp:newStatsObj["hp"] || 55,
          attack:newStatsObj["attack"] || 90,
          defense:newStatsObj["defense"] || 80,
          sp_atk:newStatsObj["special-attack"] || 50,
          sp_def:newStatsObj["special-defense"] || 105,
          speed:newStatsObj["speed"] || 96,
        }
      });

      res.status(200).json({ success: true, character: character });
    } catch (error) {
      console.error('Failed to edit character:', error);
      res.status(500).json({ error: 'Failed to edit character' });
    }
  }
}