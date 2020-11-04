import { Discussion } from '../../types';
import { FULL_DISCUSSION_FRAG } from '../../fragments';
import { gql } from '@apollo/client';

export interface SendMessageEventData {
  sendMessageEvent: Discussion;
}

export const SEND_MESSAGE_EVENT = gql`
  subscription SendMessageEvent($discussionId: Float!, $clientId: Float!) {
    sendMessageEvent(discussionId: $discussionId) {
      ...FullDiscussionFrag
    }
  }
  ${FULL_DISCUSSION_FRAG}
`;
