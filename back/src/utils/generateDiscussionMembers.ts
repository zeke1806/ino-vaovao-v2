import { DiscussionUserService } from '../discussion-user/discussion-user.service';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';

export const generateDiscussionMembers = async (
  discussionId: number,
  discussionUserService: DiscussionUserService,
  userService: UserService,
): Promise<User[]> => {
  return Promise.all(
    (
      await discussionUserService.getDiscussionParticipants(discussionId)
    ).map(async du => userService.getUserById(du.userId)),
  );
};
