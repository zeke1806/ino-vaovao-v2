import "graphql-import-node";

import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolverMap";
import typeDefs from "./type-defs";

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
export default schema;
