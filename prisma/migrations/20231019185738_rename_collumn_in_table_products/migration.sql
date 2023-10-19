/*
  Warnings:

  - You are about to drop the column `discount_percent` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "discount_percent",
ADD COLUMN     "discount_percentage" INTEGER NOT NULL DEFAULT 0;
