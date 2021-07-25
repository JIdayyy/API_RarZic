import { Playlist, User } from ".prisma/client";
import { Queries } from "../..";

export const userQuery: Queries<User | User[], { id: string }> = {
  users: (parents, args, { prisma }) => {
    return prisma.user.findMany();
  },
  user: (parents, { id }, { prisma }) => {
    return prisma.user.findUnique({ where: { id }, rejectOnNotFound: true });
  },
};

export const userRelationResolver: Queries<
  Playlist | Playlist[] | null,
  { id: string }
> = {
  playlists: (parent, args, { prisma }) => {
    return prisma.user
      .findFirst({
        where: { id: parent.id },
      })
      .playlists();
  },
};
