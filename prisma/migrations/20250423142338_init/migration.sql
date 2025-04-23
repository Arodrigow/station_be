/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `Station` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Station" ADD COLUMN "token" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Station_token_key" ON "Station"("token");
