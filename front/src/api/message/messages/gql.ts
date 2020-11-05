import {
  MESSAGE_FRAG,
  PAGINATION_META_FRAG,
  PHOTO_PROFILE_FRAG,
  USER_FRAG,
} from '../../fragments';

import { MessagesResult } from '../../types';
import { gql } from '@apollo/client';

export interface MessagesData {
  messages: MessagesResult;
}

export const MESSAGES = gql`
  query Messages($discussionId: Float!, $paginationInput: PaginationInput!) {
    messages(discussionId: $discussionId, paginationInput: $paginationInput) {
      data {
        ...MessageFrag
        sender {
          ...UserFrag
          currentPhoto {
            ...PhotoProfileFrag
          }
        }
      }
      paginationMeta {
        ...PaginationMetaFrag
      }
    }
  }
  ${PAGINATION_META_FRAG}
  ${MESSAGE_FRAG}
  ${USER_FRAG}
  ${PHOTO_PROFILE_FRAG}
`;
