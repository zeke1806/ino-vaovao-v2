/* eslint-disable @typescript-eslint/indent */
import {
  Discussion,
  DiscussionLastMessageArgs,
  SubscriptionSendMessageEventArgs,
} from '../../types';

import { FULL_DISCUSSION_FRAG } from '../../fragments';
import { gql } from '@apollo/client';

export interface SendMessageEventData {
  sendMessageEvent: Discussion;
}

export type SendMessageEventVariables = SubscriptionSendMessageEventArgs &
  DiscussionLastMessageArgs;

export const SEND_MESSAGE_EVENT = gql`
  subscription SendMessageEvent($userId: Float!, $clientId: Float!) {
    sendMessageEvent(userId: $userId) {
      ...FullDiscussionFrag
    }
  }
  ${FULL_DISCUSSION_FRAG}
`;
