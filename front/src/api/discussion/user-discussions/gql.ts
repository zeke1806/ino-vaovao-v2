import { Discussion, DiscussionLastMessageArgs } from '../../types';

import { FULL_DISCUSSION_FRAG } from '../../fragments';
import { gql } from '@apollo/client';

export interface UserDiscussionsData {
  userDiscussions: Discussion[];
}

export type UserDiscussionVars = DiscussionLastMessageArgs;

export const USER_DISCUSSIONS = gql`
  query UserDiscussions($clientId: Float!) {
    userDiscussions {
      ...FullDiscussionFrag
    }
  }
  ${FULL_DISCUSSION_FRAG}
`;
