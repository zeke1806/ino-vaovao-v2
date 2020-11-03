import { CreateDiscussionResolver } from './createDiscussion';
import { RemoveDiscussionResolver } from './removeDiscussion';
import { UserDiscussionsResolver } from './userDiscussions';

export const DiscussionResolvers = [
  UserDiscussionsResolver,
  CreateDiscussionResolver,
  RemoveDiscussionResolver,
];
