import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // GET request for characters
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

  // POST request for characters
  if (req.method === 'POST') {
    const { user, newMoveArray } = req.body;
    const db_user = await prisma.user.findFirst({
      where: {auth0Sub: user.sub}
    })
    // find user
    try {
      // update moves per array from paramater
      const character = await prisma.character.updateMany({
        where: { userId: db_user.id },
        data:{
          move_1:newMoveArray[0],
          move_2:newMoveArray[1],
          move_3:newMoveArray[2],
          move_4:newMoveArray[3],
        }
      });

      res.status(200).json({ success: true, character: character });
    } catch (error) {
      console.error('Failed to edit character:', error);
      res.status(500).json({ error: 'Failed to edit character' });
    }
  }
}