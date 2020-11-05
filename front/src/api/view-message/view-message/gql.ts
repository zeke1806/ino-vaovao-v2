import { MESSAGE_FRAG } from '../../fragments';
import { Message } from '../../types';
import { gql } from '@apollo/client';

export interface ViewMessageData {
  viewMessage: Message;
}

export const VIEW_MESSAGE = gql`
  mutation ViewMessage($messageId: Float!) {
    viewMessage(messageId: $messageId) {
      ...MessageFrag
    }
  }
  ${MESSAGE_FRAG}
`;
