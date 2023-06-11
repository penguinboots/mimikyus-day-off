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
    const { userId, characterName } = req.body;

    // find user
    try {
      const user = await prisma.user.findUnique({
        where: { id: parseInt(userId) },
      });

      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      // find character
      const character = await prisma.character.findFirst({
        where: { userId: user.id },
      });

      if (character) {
        res.status(400).json({ error: 'User already has a character' });
        return;
      }

      // create new character
      const newCharacter = await prisma.character.create({
        data: {
          userId: user.id,
          name: characterName,
        },
      });

      res.status(201).json({ success: true, character: newCharacter });
    } catch (error) {
      console.error('Failed to create character:', error);
      res.status(500).json({ error: 'Failed to create character' });
    }
  }
}