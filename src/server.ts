import { ApolloServer, AuthenticationError } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import prisma from "../prisma/client";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";
import { checkToken } from "../Middleware/checkBearerToken";

export default new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    let user;
    // try {
    //   user = await checkToken(req.headers.authorization || "");
    // } catch (error) {
    //   throw new AuthenticationError("You are not logged in");
    // }
    return { prisma: prisma };
  },
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      endpoint: "http://localhost:5000/graphql",
    }),
  ],
  introspection: true,
});
