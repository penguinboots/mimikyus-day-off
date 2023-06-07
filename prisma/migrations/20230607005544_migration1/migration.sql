-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "auth0Sub" TEXT NOT NULL,
    "password" TEXT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "achievement_name" TEXT NOT NULL,
    "achievement_image" TEXT NOT NULL,
    "achievement_description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Achieved" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date_get" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "achievementId" INTEGER NOT NULL,
    "collected" BOOLEAN NOT NULL,
    CONSTRAINT "Achieved_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Achieved_achievementId_fkey" FOREIGN KEY ("achievementId") REFERENCES "Achievement" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Character" (
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

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_auth0Sub_key" ON "User"("auth0Sub");
