import { ApolloError } from "apollo-server-express";
import { Fh, Resolver, MutationSendRequestArgs, FhStatus } from "../../types";
import { UserService } from "../../user/user.service";
import { authGuard } from "../../utils/authGuard";
import { FriendHistoryEntity } from "../friendHistory.entity";
import { FriendHistoryService } from "../friendHistory.service";
import {
  ReasonPhrases,
  StatusCodes
} from 'http-status-codes';
import { mapUser } from "../../utils/mapEntityScema";

type T = Resolver<Fh, {}, { req: any }, MutationSendRequestArgs>;

export const sendRequest: T = async (_, { userId }, { req }) => {
  const {
    payload: { id }
  } = authGuard(req);
  const userService = new UserService();
  const fhService = new FriendHistoryService();

  const user = await userService.getById(id);
  const friend = await userService.getById(+userId);
  if(!user || !friend) throw new ApolloError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND.toString());

  let newFH = new FriendHistoryEntity();
  newFH.user = user;
  newFH.friend = friend;
  newFH.accepted = false;
  newFH = await fhService.save(newFH);
  
  return {
    id: `${user.id}-${friend.id}`,
    friend: mapUser(friend),
    status: FhStatus.RequestFromMe
  }
}