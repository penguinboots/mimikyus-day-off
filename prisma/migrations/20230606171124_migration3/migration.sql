/*
  Warnings:

  - Added the required column `collected` to the `Achieved` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Achieved" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date_get" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "achievementId" INTEGER NOT NULL,
    "collected" BOOLEAN NOT NULL,
    CONSTRAINT "Achieved_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Achieved_achievementId_fkey" FOREIGN KEY ("achievementId") REFERENCES "Achievement" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Achieved" ("achievementId", "date_get", "id", "userId") SELECT "achievementId", "date_get", "id", "userId" FROM "Achieved";
DROP TABLE "Achieved";
ALTER TABLE "new_Achieved" RENAME TO "Achieved";
CREATE TABLE "new_Character" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "species" TEXT NOT NULL,
    "move_1" TEXT NOT NULL,
    "move_2" TEXT,
    "move_3" TEXT,
    "move_4" TEXT,
    "level" INTEGER NOT NULL,
    "hp_stat" INTEGER NOT NULL,
    "attack_stat" INTEGER NOT NULL,
    "defense_stat" INTEGER NOT NULL,
    "spatk_stat" INTEGER NOT NULL,
    "spdef_stat" INTEGER NOT NULL,
    "speed_stat" INTEGER NOT NULL,
    CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Character" ("attack_stat", "defense_stat", "hp_stat", "id", "level", "move_1", "move_2", "move_3", "move_4", "spatk_stat", "spdef_stat", "species", "speed_stat", "userId") SELECT "attack_stat", "defense_stat", "hp_stat", "id", "level", "move_1", "move_2", "move_3", "move_4", "spatk_stat", "spdef_stat", "species", "speed_stat", "userId" FROM "Character";
DROP TABLE "Character";
ALTER TABLE "new_Character" RENAME TO "Character";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
