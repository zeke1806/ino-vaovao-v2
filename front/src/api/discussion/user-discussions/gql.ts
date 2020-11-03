import { Discussion } from '../../types';
import { FULL_DISCUSSION_FRAG } from '../../fragments';
import { gql } from '@apollo/client';

export interface UserDiscussionsData {
  userDiscussions: Discussion[];
}

export const USER_DISCUSSIONS = gql`
  query {
    userDiscussions {
      ...FullDiscussionFrag
    }
  }
  ${FULL_DISCUSSION_FRAG}
`;
