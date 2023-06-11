import { getUserData, createUser, updateAchievement } from '../../prisma/db_helpers';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { auth0Sub } = req.query;
    try {
      const userData = await getUserData(auth0Sub);
      res.status(200).json(userData);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user data' });
    }
  } else if (req.method === 'POST') {
    const userData = req.body;
    try {
      const newUser = await createUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  } else if (req.method === 'PUT') {
    const { userId, achievementName } = req.body;
    try {
      await updateAchievement(userId, achievementName);
      res.status(200).json({ message: 'Achievement updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update achievement' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
