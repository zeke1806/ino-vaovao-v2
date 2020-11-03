import {
  DISCUSSION_FRAG,
  PHOTO_PROFILE_FRAG,
  USER_FRAG,
} from '../../../api/fragments';

import { Discussion } from '../../../api/types';
import { gql } from '@apollo/client';

export interface CreateDiscussionData {
  createDiscussion: Discussion;
}

export const CREATE_DISCUSSION = gql`
  mutation CreateDiscussion($data: CreateDiscussionInput!) {
    createDiscussion(data: $data) {
      ...DiscussionFrag
      creator {
        ...UserFrag
        currentPhoto {
          ...PhotoProfileFrag
        }
      }
      members {
        ...UserFrag
        currentPhoto {
          ...PhotoProfileFrag
        }
      }
    }
  }
  ${DISCUSSION_FRAG}
  ${USER_FRAG}
  ${PHOTO_PROFILE_FRAG}
`;
