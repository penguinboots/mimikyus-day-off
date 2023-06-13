import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // GET request for items
  if (req.method === "GET") {
    const { auth0Sub } = req.query;
    const db_user = await prisma.user.findUnique({
      where: { auth0Sub: auth0Sub },
    });
    // find items
    try {
      const items = await prisma.item.findMany({
        where: {
          userId: parseInt(db_user.id),
        },
      });
      res.status(200).json({ items });
    } catch (error) {
      console.error('Failed to retrieve items:', error);
      res.status(500).json({ error: 'Failed to retrieve items' });
    }
  }

  // POST request for items
  if (req.method === 'POST') {
    const { user, itemName, quantity } = req.body;
    // find user based on auth0Sub
    const db_user = await prisma.user.findFirst({
      where: { auth0Sub: user.sub },
    });
    try {
      // find item using db_user id and itemName
      const item = await prisma.item.findFirst({
        where: {
          userId: parseInt(db_user.id),
          name: itemName,
        },
      });
      // update item
      if (item) {
        const updatedItem = await prisma.item.update({
          where: {
            id: item.id,
          },
          data: {
            quantity: {
              increment: quantity,
            },
          },
        });
        res.status(200).json({ success: true, item: updatedItem });
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    } catch (error) {
      console.error('Failed to update item:', error);
      res.status(500).json({ error: 'Failed to update item' });
    }
  }
}