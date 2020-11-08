import * as React from 'react';

import { MESSAGES, MessagesData } from '../api/message/messages/gql';
import { useNavigation, useRoute } from '@react-navigation/core';

import BackBtn from '../components/message/BackBtn';
import DiscussionType from '../components/message/discussion-type/DiscussionType';
import Gifted from '../components/message/Gifted';
import Header from '../components/public/header/Header';
import { Ionicons } from '@expo/vector-icons';
import { MessageScreenRouteProp } from '../navigations/MessageNavigator';
import { QueryMessagesArgs } from '../api/types';
import ScreenContainer from '../components/public/ScreenContainer';
import { globalStyles } from '../styles/global';
import { useApolloClient } from '@apollo/client';
import { useGetRecipientName } from '../utils/getRecipientName';
import { useMe } from '../api/user/me/me.service';
import { useMessages } from '../api/message/messages/service';
import { useRemoveDiscussion } from '../api/discussion/remove-discussion/service';
import { useViewMessage } from '../api/view-message/view-message/service';

const MessageScreen: React.FC = () => {
  const navigation = useNavigation();
  const cache = useApolloClient().cache;
  const { submit } = useViewMessage();
  const { meData } = useMe();
  const me = meData!.me;
  const {
    params: { discussion },
  } = useRoute<MessageScreenRouteProp>();
  const { submit: submitRemDiscussion } = useRemoveDiscussion({
    discussionId: discussion.id,
  });
  const { data, subscribeToSendMessageEvent, fetchMoreMessages } = useMessages({
    discussionId: discussion.id,
    paginationInput: {
      limit: 10,
      page: 1,
    },
  });

  const messages = data ? data.messages.data : [];
  const pagination = data && data.messages.paginationMeta;
  const discussionName =
    discussion.members.length > 2
      ? discussion.name
      : useGetRecipientName(discussion.name);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      const messagesData = cache.readQuery<MessagesData, QueryMessagesArgs>({
        query: MESSAGES,
        variables: { discussionId: discussion.id } as QueryMessagesArgs,
      });
      if (messagesData && !messagesData.messages.data.length) {
        submitRemDiscussion();
      }
    });
    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    subscribeToSendMessageEvent({
      userId: me.id,
      clientId: me.id,
    });
  }, [me.id, discussion.id]);

  React.useEffect(() => {
    if (messages.length) {
      const lastMessage = messages[0];
      if (lastMessage.sender.id !== me.id) {
        submit({
          messageId: lastMessage.id,
        });
      }
    }
  }, [messages]);

  return (
    <ScreenContainer>
      <Header
        left={<BackBtn />}
        title={discussionName || 'Message'}
        // right={
        //   messages.length ? (
        //     <Ionicons
        //       name="ios-more"
        //       size={globalStyles.iconSize}
        //       color={globalStyles.colors.primary}
        //     />
        //   ) : undefined
        // }
      />
      {!messages.length && <DiscussionType discussion={discussion} />}
      {pagination && (
        <Gifted
          messages={messages}
          discussion={discussion}
          me={me}
          fetchMore={fetchMoreMessages}
          pagination={pagination}
        />
      )}
    </ScreenContainer>
  );
};

export default MessageScreen;
