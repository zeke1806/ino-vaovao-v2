import { Discussion } from '../../types';
import { FULL_DISCUSSION_FRAG } from '../../fragments';
import { gql } from '@apollo/client';

export interface SendMessageData {
  sendMessage: Discussion;
}

export const SEND_MESSAGE = gql`
  mutation SendMessage($data: SendMessageInput!) {
    sendMessage(data: $data) {
      ...FullDiscussionFrag
    }
  }
  ${FULL_DISCUSSION_FRAG}
`;
