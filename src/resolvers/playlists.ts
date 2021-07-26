import { Playlist } from ".prisma/client";
import { Queries } from "../..";

export const playlistQuery: Queries<Playlist | Playlist[], { id: string }> = {
  playlist: (parent, { id }, { prisma }) => {
    return prisma.playlist.findUnique({
      where: { id },
      rejectOnNotFound: true,
    });
  },
  playlists: (parent, args, { prisma }) => {
    return prisma.playlist.findMany();
  },
};
