import { PHOTO_PROFILE_FRAG, USER_FRAG } from '../../fragments';

import { User } from '../../types';
import { gql } from '@apollo/client';

export interface FriendRequestsData {
  friendRequests: User[];
}

export const FRIEND_REQUESTS = gql`
  query {
    friendRequests {
      ...UserFrag
      currentPhoto {
        ...PhotoProfileFrag
      }
    }
  }
  ${USER_FRAG}
  ${PHOTO_PROFILE_FRAG}
`;
