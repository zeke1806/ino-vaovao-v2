import { FRIEND_HISTORY_FRAG } from '../../fragments';
import { FriendHistory } from '../../types';
import { gql } from '@apollo/client';

export interface SendFriendRequestData {
  sendFriendRequest: FriendHistory;
}

export const SEND_FRIEND_REQUEST = gql`
  mutation SendFriendRequest($friendId: Float!) {
    sendFriendRequest(friendId: $friendId) {
      ...FriendHistoryFrag
    }
  }
  ${FRIEND_HISTORY_FRAG}
`;
