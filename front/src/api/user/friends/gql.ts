import { PHOTO_PROFILE_FRAG, USER_FRAG } from '../../fragments';

import { User } from '../../types';
import { gql } from '@apollo/client';

export interface FriendsData {
  friends: User[];
}

export const FRIENDS = gql`
  query {
    friends {
      ...UserFrag
      currentPhoto {
        ...PhotoProfileFrag
      }
    }
  }
  ${USER_FRAG}
  ${PHOTO_PROFILE_FRAG}
`;
