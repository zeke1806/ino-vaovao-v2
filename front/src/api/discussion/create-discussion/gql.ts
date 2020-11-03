import { Discussion } from '../../types';
import { FULL_DISCUSSION_FRAG } from '../../fragments';
import { gql } from '@apollo/client';

export interface CreateDiscussionData {
  createDiscussion: Discussion;
}

export const CREATE_DISCUSSION = gql`
  mutation CreateDiscussion($data: CreateDiscussionInput!) {
    createDiscussion(data: $data) {
      ...FullDiscussionFrag
    }
  }
  ${FULL_DISCUSSION_FRAG}
`;
