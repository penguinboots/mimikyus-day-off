import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // GET method for character
  if (req.method === "GET") {
    // write this
  }

  // POST method for character
  if (req.method === "POST") {
    // write this LAST
  }

}