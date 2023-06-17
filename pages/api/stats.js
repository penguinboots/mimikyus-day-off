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
    const { user, stat, amount } = req.body;
    const db_user = await prisma.user.findFirst({
      where: {auth0Sub: user.sub}
    })
    // find user
    try {
      // update moves per array from paramater
      let db_stat;
      if (stat === "special-attack") {
        db_stat = "sp_atk";
      } else if (stat === "special-defense") {
        db_stat = "sp_def";
      } else {
        db_stat = stat;
      }
      const character = await prisma.character.updateMany({
        where: { userId: db_user.id },
        data:{
          [db_stat]:{
            increment: amount
          }
        }
      });

      res.status(200).json({ success: true, character: character });
    } catch (error) {
      console.error('Failed to edit character:', error);
      res.status(500).json({ error: 'Failed to edit character' });
    }
  }
}