import { songQuery, songRelationResolver } from "./songs";

const resolvers = {
  Query: {
    ...songQuery,
  },
  // Mutation: {},
  Song: {
    ...songRelationResolver,
  },
};

export default resolvers;
