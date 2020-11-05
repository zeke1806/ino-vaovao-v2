import * as React from 'react';

import { MESSAGES, MessagesData } from './gql';
import {
  SEND_MESSAGE_EVENT,
  SendMessageEventData,
  SendMessageEventVariables,
} from '../send-message/event.gql';

import { QueryMessagesArgs } from '../../types';
import produce from 'immer';
import { useQuery } from '@apollo/client';

const LIMIT = 10;

interface Return {
  data: MessagesData | undefined;
  loading: boolean;
  subscribeToSendMessageEvent: (variables: SendMessageEventVariables) => void;
  fetchMoreMessages: () => void;
}

export const useMessages = (variables: QueryMessagesArgs): Return => {
  const { data, loading, subscribeToMore, fetchMore } = useQuery<
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

  const fetchMoreMessages = React.useCallback((): void => {
    if (
      data &&
      data.messages.paginationMeta.currentPage !==
        data.messages.paginationMeta.totalPages
    ) {
      fetchMore({
        variables: {
          discussionId: variables.discussionId,
          paginationInput: {
            page: data.messages.paginationMeta.currentPage + 1,
            limit: LIMIT,
          },
        },
        updateQuery(prev, { fetchMoreResult }) {
          if (!fetchMoreResult) return prev;
          return produce(prev, (draft) => {
            draft.messages.paginationMeta =
              fetchMoreResult.messages.paginationMeta;
            draft.messages.data = [
              ...draft.messages.data,
              ...fetchMoreResult.messages.data,
            ];
          });
        },
      });
    }
  }, [data]);

  return {
    data,
    loading,
    subscribeToSendMessageEvent,
    fetchMoreMessages,
  };
};
