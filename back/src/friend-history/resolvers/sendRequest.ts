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
import { checkStatusFH } from "../../utils/checkStatusFH";

type T = Resolver<Fh, {}, { req: any }, MutationSendRequestArgs>;

export const sendRequest: T = async (_, { friendId }, { req }) => {
  const {
    payload: { id }
  } = authGuard(req);
  const userService = new UserService();
  const fhService = new FriendHistoryService();
  const status = await checkStatusFH(id, +friendId);

  if(status !== FhStatus.Suggestion) throw new ApolloError(ReasonPhrases.CONFLICT, StatusCodes.CONFLICT.toString());

  const user = await userService.getById(id);
  const friend = await userService.getById(+friendId);
  if(!user || !friend) throw new ApolloError(ReasonPhrases.NO_CONTENT, StatusCodes.NO_CONTENT.toString());

  let newFH = new FriendHistoryEntity();
  newFH.user = user;
  newFH.friend = friend;
  newFH.accepted = false;
  newFH = await fhService.save(newFH);
  
  return {
    friend: mapUser(friend),
    status: await checkStatusFH(id, +friendId)
  }
}