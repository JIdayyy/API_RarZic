import { albumQuery, albumRelationResolver } from "./albums";
import { songQuery, songRelationResolver } from "./songs";
import { userQuery, userRelationResolver } from "./users";
import { artistQuery, artistRelationResolver } from "./artists";
import { playlistQuery, playlistRelationResolver } from "./playlists";
const resolvers = {
  Query: {
    ...songQuery,
    ...userQuery,
    ...albumQuery,
    ...artistQuery,
    ...playlistQuery,
  },
  Song: {
    ...songRelationResolver,
  },
  User: {
    ...userRelationResolver,
  },
  Album: {
    ...albumRelationResolver,
  },
  Artist: {
    ...artistRelationResolver,
  },
  Playlist: {
    ...playlistRelationResolver,
  },
  // Mutation: {},
};

export default resolvers;
