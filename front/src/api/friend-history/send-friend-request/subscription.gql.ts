import { FRIEND_HISTORY_FRAG } from '../../fragments';
import { FriendHistory } from '../../types';
import { gql } from '@apollo/client';

export interface SendFriendRequestEventData {
  sendFriendRequestEvent: FriendHistory;
}

export const SEND_FRIEND_REQUEST_EVENT = gql`
  subscription {
    sendFriendRequestEvent {
      ...FriendHistoryFrag
    }
  }
  ${FRIEND_HISTORY_FRAG}
`;
