import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import resolvers from "./users/resolvers.mjs";
import typeDefs from "./users/typeDefs.mjs";

export const mergedResolver = mergeResolvers([resolvers]);
export const mergedTypeDefs = mergeTypeDefs([typeDefs]);
