import { IResolvers } from "graphql-tools";
import { login } from "./user/resolvers/login";
import { me } from "./user/resolvers/me";
import { users } from "./user/resolvers/users";

const helloWorld = (): string => "Hello world";

const resolverMap: IResolvers = {
  Query: {
    helloWorld,
    users,
    me,
  },
  Mutation: {
    login,
  },
};

export default resolverMap;
