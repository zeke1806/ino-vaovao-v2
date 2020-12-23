import { ApolloError } from "apollo-server-express";
import { FhStatus } from "../types";
import { UserService } from "../user/user.service";
import {
  ReasonPhrases,
  StatusCodes,
} from 'http-status-codes';
import { FriendHistoryService } from "../friend-history/friendHistory.service";

export const checkStatusFH = async (userId: number, friendId: number): Promise<FhStatus> => {
  const userService = new UserService();
  const fhService = new FriendHistoryService();
  const user = await userService.getById(userId);
  const friend = await userService.getById(friendId);
  if(!user || !friend) throw new ApolloError(ReasonPhrases.NO_CONTENT, StatusCodes.NO_CONTENT.toString());

  const fh = await fhService.getOne(user, friend);
  if(!fh) return FhStatus.Suggestion;
  else if(fh.accepted) return FhStatus.Accepted;
  else return FhStatus.Processing;
}