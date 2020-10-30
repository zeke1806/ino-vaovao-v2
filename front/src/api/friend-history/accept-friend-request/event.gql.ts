import { FRIEND_HISTORY_FRAG } from '../../fragments';
import { FriendHistory } from '../../types';
import { gql } from '@apollo/client';

export interface AcceptFriendRequestEventData {
  acceptFriendRequestEvent: FriendHistory;
}

export const ACCEPT_FRIEND_REQUEST_EVENT = gql`
  subscription {
    acceptFriendRequestEvent {
      ...FriendHistoryFrag
    }
  }
  ${FRIEND_HISTORY_FRAG}
`;
