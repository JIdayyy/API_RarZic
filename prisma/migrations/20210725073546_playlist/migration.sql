/*
  Warnings:

  - Made the column `userId` on table `Playlist` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Playlist" ALTER COLUMN "userId" SET NOT NULL;
