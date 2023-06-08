/*
  Warnings:

  - You are about to drop the `Achieved` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `achievement_description` on the `Achievement` table. All the data in the column will be lost.
  - You are about to drop the column `achievement_image` on the `Achievement` table. All the data in the column will be lost.
  - You are about to drop the column `achievement_name` on the `Achievement` table. All the data in the column will be lost.
  - Added the required column `collected` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_get` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Achievement` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Achieved";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Achievement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date_get" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "collected" BOOLEAN NOT NULL,
    CONSTRAINT "Achievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Achievement" ("id") SELECT "id" FROM "Achievement";
DROP TABLE "Achievement";
ALTER TABLE "new_Achievement" RENAME TO "Achievement";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
