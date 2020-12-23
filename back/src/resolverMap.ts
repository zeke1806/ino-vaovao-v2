import { IResolvers } from "graphql-tools";
import { login } from "./user/resolvers/login";
import { me } from "./user/resolvers/me";
import { users } from "./user/resolvers/users";
import { register } from "./user/resolvers/register";
import { updatePhoto } from "./user/resolvers/updatePhoto";
import { updateInfo } from "./user/resolvers/updateInfo";
import { delPhoto } from "./user/resolvers/delPhoto";

import { sendRequest } from "./friend-history/resolvers/sendRequest";
import { acceptRequest } from "./friend-history/resolvers/acceptRequest";
import { delRequest } from "./friend-history/resolvers/delRequest";
import { friendsHistory } from "./friend-history/resolvers/friendsHistory";

const helloWorld = (): string => "Hello world";

const resolverMap: IResolvers = {
  Query: {
    helloWorld,
    users,
    me,
    friendsHistory
  },

  Mutation: {
    login,
    register,
    updatePhoto,
    updateInfo,
    delPhoto,
    sendRequest,
    acceptRequest,
    delRequest
  },
};

export default resolverMap;
