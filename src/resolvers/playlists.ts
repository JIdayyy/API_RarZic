import { Playlist, User, Song } from ".prisma/client";
import { Queries } from "../..";

export const playlistQuery: Queries<Playlist | Playlist[], { id: string }> = {
  playlists: (parent, args, { prisma }) => {
    return prisma.playlist.findMany();
  },
  playlist: (parent, { id }, { prisma }) => {
    return prisma.playlist.findUnique({
      where: { id },
      rejectOnNotFound: true,
    });
  },
};

export const playlistRelationResolver: Queries<
  User | null | Song[],
  { id: string }
> = {
  user: (parent, args, { prisma }) => {
    return prisma.playlist
      .findFirst({
        where: { id: parent.id },
        rejectOnNotFound: true,
      })
      .user();
  },
  songs: (parent, args, { prisma }) => {
    return prisma.playlist
      .findFirst({
        where: { id: parent.id },
        rejectOnNotFound: true,
      })
      .songs();
  },
};
