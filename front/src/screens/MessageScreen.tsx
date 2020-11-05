import * as React from 'react';

import BackBtn from '../components/message/BackBtn';
import DiscussionType from '../components/message/discussion-type/DiscussionType';
import Gifted from '../components/message/Gifted';
import Header from '../components/public/header/Header';
import { Ionicons } from '@expo/vector-icons';
import { MessageScreenRouteProp } from '../navigations/MessageNavigator';
import ScreenContainer from '../components/public/ScreenContainer';
import { globalStyles } from '../styles/global';
import { useMe } from '../api/user/me/me.service';
import { useMessages } from '../api/message/messages/service';
import { useRoute } from '@react-navigation/core';
import { useViewMessage } from '../api/view-message/view-message/service';

const MessageScreen: React.FC = () => {
  const { submit } = useViewMessage();
  const { meData } = useMe();
  const me = meData!.me;
  const {
    params: { discussion },
  } = useRoute<MessageScreenRouteProp>();
  const {
    data,
    loading,
    subscribeToSendMessageEvent,
    fetchMoreMessages,
  } = useMessages({
    discussionId: discussion.id,
    paginationInput: {
      limit: 10,
      page: 1,
    },
  });

  React.useEffect(() => {
    subscribeToSendMessageEvent({
      userId: me.id,
      clientId: me.id,
    });
  }, [me.id, discussion.id]);

  const messages = data ? data.messages.data : [];
  const pagination = data && data.messages.paginationMeta;

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
        left={<BackBtn messages={messages} />}
        title={discussion.name || 'Message'}
        right={
          messages.length ? (
            <Ionicons
              name="ios-more"
              size={globalStyles.iconSize}
              color={globalStyles.colors.primary}
            />
          ) : undefined
        }
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
