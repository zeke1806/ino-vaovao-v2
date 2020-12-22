import { IResolvers } from "graphql-tools";
import { login } from "./user/resolvers/login";
import { me } from "./user/resolvers/me";
import { users } from "./user/resolvers/users";
import { register } from "./user/resolvers/register";
import { updatePhoto } from "./user/resolvers/updatePhoto";
import { updateInfo } from "./user/resolvers/updateInfo";

const helloWorld = (): string => "Hello world";

const resolverMap: IResolvers = {
  Query: {
    helloWorld,
    users,
    me,
  },

  Mutation: {
    login,
    register,
    updatePhoto,
    updateInfo
  },
};

export default resolverMap;
