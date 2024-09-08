/*
  Warnings:

  - Added the required column `language` to the `ads` table without a default value. This is not possible if the table is not empty.
  - Made the column `picture` on table `ads` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `language` to the `news` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ads" ADD COLUMN     "language" TEXT NOT NULL,
ALTER COLUMN "picture" SET NOT NULL;

-- AlterTable
ALTER TABLE "news" ADD COLUMN     "language" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "language" TEXT NOT NULL;
