import { Discussion, MutationCreateDiscussionArgs, Resolver } from "../../types";
import { UserService } from "../../user/user.service";
import { authGuard } from "../../utils/authGuard";
import { DiscussionService } from "../discussion.service";
import { DiscussionUserService } from "../../discussion-user/discussionUser.service";
import { UserEntity } from "../../user/user.entity";
import { DiscussionEntity } from "../discussion.entity";
import { DiscussionUserEntity } from "../../discussion-user/discussionUser.entity";

type T = Resolver<Discussion, {}, { req: any }, MutationCreateDiscussionArgs>;

export const createDiscussion: T = async (_, { members, name }, { req }) => {
  const {
    payload: { id }
  } = authGuard(req);
  const userService = new UserService();
  const discussionService = new DiscussionService();
  const duService = new DiscussionUserService();

  let newDiscussion = new DiscussionEntity();
  newDiscussion.name = name;
  newDiscussion = await discussionService.save(newDiscussion);
  const users = await Promise.all(members.map(async (id) => await userService.getById(+id) as UserEntity));
  
  await Promise.all(users.map(async (u) => {
    const du = new DiscussionUserEntity();
    du.discussion = newDiscussion;
    du.user = u;
    if(u.id === id) du.creator = true;
    return duService.save(du);
  }));

  return {
    id: newDiscussion.id.toString(),
    name: newDiscussion.name
  }
}