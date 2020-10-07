import { PHOTO_PROFILE_FRAG, USER_FRAG } from '../../fragments';
import { User } from '../../types';
import { gql } from '@apollo/client';

export interface MeData {
  me: User;
}

export const ME = gql`
  query {
    me {
      ...UserFrag
      currentPhoto {
        ...PhotoProfileFrag
      }
      photos {
        ...PhotoProfileFrag
      }
    }
  }
  ${USER_FRAG}
  ${PHOTO_PROFILE_FRAG}
`;
