/*
  Warnings:

  - The primary key for the `Purchase` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id");
