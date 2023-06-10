-- CreateTable
CREATE TABLE "Move" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date_get" DATETIME,
    "name" TEXT NOT NULL,
    "collected" BOOLEAN NOT NULL
);
