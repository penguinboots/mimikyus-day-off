import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // GET request for moves
  if (req.method === "GET") {
    const { auth0Sub }  = req.query;
    const db_user = await prisma.user.findUnique({
      where: { auth0Sub: auth0Sub },
    });
    // find moves
    try {
      const moves = await prisma.move.findMany({
        where: {
          userId: parseInt(db_user.id),
        },
      });
      res.status(200).json({ moves });
    } catch (error) {
      console.error('Failed to retrieve moves:', error);
      res.status(500).json({ error: 'Failed to retrieve moves' });
    }
  }

  // POST request for moves
  if (req.method === 'POST') {
    const { user, moveName } = req.body;
    //find user based on auth0Sub
    const db_user = await prisma.user.findFirst({
      where: {auth0Sub: user.sub}
    })
    try {
      //find move using db_user id
      const move = await prisma.move.findFirst({
        where: {
          userId: parseInt(db_user.id),
          name: moveName,
        },
      });
      // update move
      if (move) {
        const updatedmove = await prisma.move.update({
          where: {
            id: move.id,
          },
          data: {
            collected: true,
          },
        });
        res.status(200).json({ success: true, move: updatedmove });
      } else {
        res.status(404).json({ error: 'move not found' });
      }
    } catch (error) {
      console.error('Failed to update move:', error);
      res.status(500).json({ error: 'Failed to update move' });
    }
  }
}
