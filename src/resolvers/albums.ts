import { Queries } from "../..";
import { Artist, Song, Album } from ".prisma/client";
export const albumQuery: Queries<Album | Album[], { id: string }> = {
  albums: (parent, args, { prisma }) => {
    return prisma.album.findMany();
  },
  album: (parent, { id }, { prisma }) => {
    return prisma.album.findUnique({ where: { id }, rejectOnNotFound: true });
  },
};

export const albumRelationResolver: Queries<
  Artist | Song[] | null,
  { id: string }
> = {
  artist: (parent, { id }, { prisma }) => {
    return prisma.album
      .findFirst({
        where: {
          artistId: parent.id,
        },
        rejectOnNotFound: true,
      })
      .artist();
  },
  songs: (parent, { id }, { prisma }) => {
    return prisma.album
      .findFirst({
        where: {
          artistId: parent.id,
        },
      })
      .songs();
  },
};
