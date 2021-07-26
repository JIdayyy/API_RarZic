import { Queries } from "../..";
import { Album, Song, Artist } from ".prisma/client";

export const artistQuery: Queries<Artist | Artist[], { id: string }> = {
  artists: (parent, args, { prisma }) => {
    return prisma.artist.findMany();
  },
  artist: (parent, { id }, { prisma }) => {
    return prisma.artist.findUnique({ where: { id }, rejectOnNotFound: true });
  },
};

export const artistRelationResolver: Queries<Song[] | Album[], { id: string }> =
  {
    albums: (parent, args, { prisma }) => {
      return prisma.artist
        .findFirst({
          where: {
            id: parent.id,
          },
        })
        .albums();
    },
    songs: (parent, args, { prisma }) => {
      return prisma.artist
        .findFirst({
          where: {
            id: parent.id,
          },
        })
        .songs();
    },
  };
