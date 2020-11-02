import {
  DISCUSSION_FRAG,
  MESSAGE_FRAG,
  PHOTO_PROFILE_FRAG,
  USER_FRAG,
} from '../../fragments';

import { Discussion } from '../../types';
import { gql } from '@apollo/client';

export interface UserDiscussionsData {
  userDiscussions: Discussion[];
}

export const USER_DISCUSSIONS = gql`
  {
    userDiscussions {
      ...DiscussionFrag
      lastMessage {
        message {
          ...MessageFrag
          sender {
            ...UserFrag
            currentPhoto {
              ...PhotoProfileFrag
            }
          }
        }
        view
      }
      participant {
        ...UserFrag
        currentPhoto {
          ...PhotoProfileFrag
        }
      }
      creator {
        ...UserFrag
      }
    }
  }
  ${DISCUSSION_FRAG}
  ${MESSAGE_FRAG}
  ${USER_FRAG}
  ${PHOTO_PROFILE_FRAG}
`;
