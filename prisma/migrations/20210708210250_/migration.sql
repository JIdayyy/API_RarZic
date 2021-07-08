/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Album` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Playlist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Song` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Album.title_unique" ON "Album"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Artist.name_unique" ON "Artist"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Playlist.title_unique" ON "Playlist"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Song.title_unique" ON "Song"("title");
