/*
  Warnings:

  - You are about to drop the `ads` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `news` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ads";

-- DropTable
DROP TABLE "news";

-- DropTable
DROP TABLE "products";

-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);
