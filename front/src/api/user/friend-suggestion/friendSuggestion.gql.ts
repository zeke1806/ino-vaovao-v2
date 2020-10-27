import { PHOTO_PROFILE_FRAG, USER_FRAG } from '../../fragments';

import { User } from '../../types';
import { gql } from '@apollo/client';

export interface FriendSuggestionData {
  friendSuggestion: User[];
}

export const FRIEND_SUGGESTION = gql`
  query {
    friendSuggestion {
      ...UserFrag
      currentPhoto {
        ...PhotoProfileFrag
      }
    }
  }
  ${USER_FRAG}
  ${PHOTO_PROFILE_FRAG}
`;
