import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // GET request for move
  if (req.method === "GET") {
    // write this
  }

  // POST request for move
  if (req.method == 'POST') {
    const { userId, moveName } = req.body;
    try {
      const move = await prisma.move.findFirst({
        where: {
          userId: parseInt(userId),
          name: moveName,
        },
      });
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
