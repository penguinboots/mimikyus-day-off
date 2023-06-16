-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "auth0Sub" TEXT NOT NULL,
    "password" TEXT,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" SERIAL NOT NULL,
    "date_get" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "collected" BOOLEAN NOT NULL,

    CONSTRAINT "Achievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Move" (
    "id" SERIAL NOT NULL,
    "date_get" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "collected" BOOLEAN NOT NULL,

    CONSTRAINT "Move_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "hp" INTEGER NOT NULL,
    "attack" INTEGER NOT NULL,
    "defense" INTEGER NOT NULL,
    "sp_atk" INTEGER NOT NULL,
    "sp_def" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "move_1" TEXT NOT NULL,
    "move_2" TEXT,
    "move_3" TEXT,
    "move_4" TEXT,

    CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "Item_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_auth0Sub_key" ON "User"("auth0Sub");