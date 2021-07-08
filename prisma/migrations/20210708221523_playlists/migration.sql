-- AlterTable
ALTER TABLE "Playlist" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Playlist" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
