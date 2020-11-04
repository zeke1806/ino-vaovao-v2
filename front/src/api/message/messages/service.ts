import { MESSAGES, MessagesData } from './gql';
import {
  SEND_MESSAGE_EVENT,
  SendMessageEventData,
  SendMessageEventVariables,
} from '../send-message/event.gql';

import { QueryMessagesArgs } from '../../types';
import produce from 'immer';
import { useQuery } from '@apollo/client';

interface Return {
  data: MessagesData | undefined;
  loading: boolean;
  subscribeToSendMessageEvent: (variables: SendMessageEventVariables) => void;
}

export const useMessages = (variables: QueryMessagesArgs): Return => {
  const { data, loading, subscribeToMore } = useQuery<
    MessagesData,
    QueryMessagesArgs
  >(MESSAGES, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  const subscribeToSendMessageEvent = (
    variables: SendMessageEventVariables,
  ): void => {
    subscribeToMore<SendMessageEventData, SendMessageEventVariables>({
      document: SEND_MESSAGE_EVENT,
      variables,
      updateQuery(prev, { subscriptionData }) {
        if (
          !subscriptionData ||
          subscriptionData.data.sendMessageEvent.lastMessage!.message.sender
            .id === variables.clientId
        ) {
          return prev;
        }
        return produce(prev, (draft) => {
          draft.messages.data.unshift(
            subscriptionData.data.sendMessageEvent.lastMessage!.message,
          );
        });
      },
    });
  };

  return {
    data,
    loading,
    subscribeToSendMessageEvent,
  };
};
