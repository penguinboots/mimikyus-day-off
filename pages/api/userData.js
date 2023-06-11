import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // GET method for user data
  if (req.method === "GET") {
    const { auth0Sub } = req.query;

    try {
      const db_user = await prisma.user.findUnique({
        where: { auth0Sub },
      });

      if (!db_user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      // find character
      const db_character = await prisma.character.findFirst({
        where: { userId: db_user.id },
      });

      // find achievements
      const db_achievements = await prisma.achievement.findMany({
        where: { userId: db_user.id },
      });

      // find moves
      const db_moves = await prisma.move.findMany({
        where: { userId: db_user.id },
      });

      res.status(200).json({
        db_user,
        db_character,
        db_achievements,
        db_moves,
      });
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      res.status(500).json({ error: 'Failed to fetch user data' });
    }
  }

  // POST method for user data
  if (req.method === 'POST') {
    const { auth0Sub } = req.query;
    const { characterName, achievements, moves } = req.body;
  
    try {
      let db_user = await prisma.user.findUnique({
        where: { auth0Sub },
      });
  
      if (!db_user) {
        db_user = await prisma.user.create({
          data: {
            auth0Sub,
            email: 'user@example.com',
            password: 'password123',
            name: 'John Doe',
          },
        });
      }
  
      // find character otherwise create/update character
      let db_character = await prisma.character.findFirst({
        where: { userId: db_user.id },
      });
  
      if (!db_character) {
        db_character = await prisma.character.create({
          data: {
            userId: db_user.id,
            name: characterName,
          },
        });
      } else {
        db_character = await prisma.character.update({
          where: { id: db_character.id },
          data: {
            name: characterName,
          },
        });
      }
  
      // update achievements
      for (const achievement of achievements) {
        await prisma.achievement.updateMany({
          where: {
            userId: db_user.id,
            name: achievement.name,
          },
          data: {
            collected: achievement.collected,
          },
        });
      }
  
      // update moves
      for (const move of moves) {
        await prisma.move.updateMany({
          where: {
            userId: db_user.id,
            name: move.name,
          },
          data: {
            collected: move.collected,
          },
        });
      }
  
      const updated_db_user = await prisma.user.findUnique({
        where: { auth0Sub },
      });
  
      res.status(200).json({
        user: updated_db_user,
        character: db_character,
      });
    } catch (error) {
      console.error('Failed to update user data:', error);
      res.status(500).json({ error: 'Failed to update user data' });
    }
  }
}