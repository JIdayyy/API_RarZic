import { songQuery, songRelationResolver } from "./songs";
import { userQuery, userRelationResolver } from "./users";

const resolvers = {
  Query: {
    ...songQuery,
    ...userQuery,
  },
  // Mutation: {},
  Song: {
    ...songRelationResolver,
  },
  User: {
    ...userRelationResolver,
  },
};

export default resolvers;
