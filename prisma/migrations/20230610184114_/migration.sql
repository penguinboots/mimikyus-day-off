/*
  Warnings:

  - Added the required column `userId` to the `Move` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Move" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date_get" DATETIME,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "collected" BOOLEAN NOT NULL,
    CONSTRAINT "Move_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Move" ("collected", "date_get", "id", "name") SELECT "collected", "date_get", "id", "name" FROM "Move";
DROP TABLE "Move";
ALTER TABLE "new_Move" RENAME TO "Move";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
