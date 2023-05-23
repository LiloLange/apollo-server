import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import {
  mergedResolver as resolvers,
  mergedTypeDefs as typeDefs,
} from "./features/rootSchema.mjs";

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, { listen: { port: 4000 } }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
