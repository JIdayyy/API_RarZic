-- AlterTable
ALTER TABLE "Album" ALTER COLUMN "picture" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Artist" ALTER COLUMN "picture" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Playlist" ADD COLUMN     "picture" TEXT;
