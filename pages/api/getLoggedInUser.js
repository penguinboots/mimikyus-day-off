import { getUserAchievements, findCurrentUser, findUserCharacters } from "../../prisma/script";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // Create an instance of the PrismaClient

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { user } = req.body;

  try {
    const currentUser = await findCurrentUser(user.sub);
    let userId;

    if (!currentUser) {
      const newUser = await prisma.user.create({
        data: {
          email: "johndoe@example.com",
          auth0Sub: "1234567890",
          name: "John Doe",
          password: "Password",
          achievements: [],
          characters: [],
        },
      });
      userId = newUser.id;
      res.status(201).json({
        user: newUser,
        achievements: [],
        characters: [],
      });
    } else {
      userId = currentUser.id;
      const achievements = await getUserAchievements(userId);
      const userCharacters = await findUserCharacters(userId);

      res.status(200).json({
        user: currentUser,
        achievements,
        characters: userCharacters,
      });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}