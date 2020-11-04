import {
  Discussion,
  DiscussionLastMessageArgs,
  MutationCreateDiscussionArgs,
} from '../../types';

import { FULL_DISCUSSION_FRAG } from '../../fragments';
import { gql } from '@apollo/client';

export interface CreateDiscussionData {
  createDiscussion: Discussion;
}

export type CreateDiscussionVars = MutationCreateDiscussionArgs &
  DiscussionLastMessageArgs;

export const CREATE_DISCUSSION = gql`
  mutation CreateDiscussion($data: CreateDiscussionInput!, $clientId: Float!) {
    createDiscussion(data: $data) {
      ...FullDiscussionFrag
    }
  }
  ${FULL_DISCUSSION_FRAG}
`;
