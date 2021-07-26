import { albumQuery, albumRelationResolver } from "./albums";
import { songQuery, songRelationResolver } from "./songs";
import { userQuery, userRelationResolver } from "./users";
import { artistQuery, artistRelationResolver } from "./artists";
const resolvers = {
  Query: {
    ...songQuery,
    ...userQuery,
    ...albumQuery,
    ...artistQuery,
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
  // Mutation: {},
};

export default resolvers;
