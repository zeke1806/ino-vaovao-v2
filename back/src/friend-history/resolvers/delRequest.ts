import { ApolloError } from "apollo-server-express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { MutationDelRequestArgs, Resolver } from "../../types";
import { UserEntity } from "../../user/user.entity";
import { UserService } from "../../user/user.service";
import { authGuard } from "../../utils/authGuard";
import { FriendHistoryService } from "../friendHistory.service";

type T = Resolver<boolean, {}, { req: any }, MutationDelRequestArgs>;

export const delRequest: T = async (_, { userId }, { req }) => {
  const {
    payload: { id }
  } = authGuard(req);
  const userService = new UserService();
  const fhService = new FriendHistoryService();

  const me = (await userService.getById(id)) as UserEntity;
  const user = (await userService.getById(+userId)) as UserEntity;
  const fhToDel = (await fhService.getOne(me, user)) || (await fhService.getOne(user, me));
  if(!fhToDel) throw new ApolloError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND.toString());
  Object.assign(fhToDel, { user: { id: fhToDel.userId } });
  Object.assign(fhToDel, { friend: {id: fhToDel.friendId} });

  await fhService.remove(fhToDel);
  return true;
}