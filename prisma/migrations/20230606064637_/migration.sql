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
    "date_get" DATETIME,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "collected" BOOLEAN NOT NULL,
    CONSTRAINT "Achievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Character" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "move_1" TEXT NOT NULL,
    "move_2" TEXT,
    "move_3" TEXT,
    "move_4" TEXT,
    CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE "Move"(
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date_get" DATETIME,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "collected" BOOLEAN NOT NULL,
    CONSTRAINT "Move_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_auth0Sub_key" ON "User"("auth0Sub");
