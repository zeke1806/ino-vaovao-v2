import { FriendHistory } from '../../types';
import { gql } from '@apollo/client';

export interface DeclineFriendRequestEventData {
  declineFriendRequestEvent: FriendHistory;
}

export const DECLINE_FRIEND_REQUEST_EVENT = gql`
  subscription {
    declineFriendRequestEvent {
      user {
        id
      }
      friend {
        id
      }
    }
  }
`;
