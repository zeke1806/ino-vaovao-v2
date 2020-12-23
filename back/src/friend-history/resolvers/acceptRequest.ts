import { Fh, Resolver, MutationAcceptRequestArgs, FhStatus } from "../../types";
import { UserEntity } from "../../user/user.entity";
import { UserService } from "../../user/user.service";
import { authGuard } from "../../utils/authGuard";
import { mapUser } from "../../utils/mapEntityScema";
import { FriendHistoryEntity } from "../friendHistory.entity";
import { FriendHistoryService } from "../friendHistory.service";

type T = Resolver<Fh, {}, { req: any }, MutationAcceptRequestArgs>;

export const acceptRequest: T = async (_, { userId }, { req }) => {
  const {
    payload: { id }
  } = authGuard(req);
  const userService = new UserService();
  const fhService = new FriendHistoryService();
  const requestor = (await userService.getById(+userId)) as UserEntity;
  const me = (await userService.getById(id)) as UserEntity;

  const requestorFH = (await fhService.getOne(requestor, me)) as FriendHistoryEntity;
  requestorFH.user = requestor;
  requestorFH.friend = me;
  requestorFH.accepted = true;
  await fhService.save(requestorFH!);

  const meFH = new FriendHistoryEntity();
  meFH.user = me;
  meFH.friend = requestor;
  meFH.accepted = true;
  await fhService.save(meFH);

  return {
    id: `${requestor.id}`,
    friend: mapUser(requestor),
    status: FhStatus.Friend
  }
}