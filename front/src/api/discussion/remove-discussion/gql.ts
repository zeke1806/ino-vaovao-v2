import { gql } from '@apollo/client';

export interface RemoveDiscussionData {
  removeDiscussion: boolean;
}

export const REMOVE_DISCUSSION = gql`
  mutation RemoveDiscussion($discussionId: Float!) {
    removeDiscussion(discussionId: $discussionId)
  }
`;
