import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // GET request for characters
  if (req.method === "GET") {
    const { userId } = req.query;

    // find characters
    try {
      const characters = await prisma.character.findMany({
        where: {
          userId: parseInt(userId),
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
      const user = await prisma.user.findUnique({
        where: { id: parseInt(db_user.id) },
      });

      // update moves per array from paramater
      const character = await prisma.character.updateFirst({
        where: { userId: user.id },
        data:{
          move1:newMoveArray[0],
          move2:newMoveArray[1],
          move3:newMoveArray[2],
          move4:newMoveArray[3],
        }
      });

      res.status(201).json({ success: true, character: newCharacter });
    } catch (error) {
      console.error('Failed to edit character:', error);
      res.status(500).json({ error: 'Failed to edit character' });
    }
  }
}