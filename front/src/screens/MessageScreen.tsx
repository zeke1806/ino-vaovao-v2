import * as React from 'react';

import BackBtn from '../components/message/BackBtn';
import DiscussionType from '../components/message/discussion-type/DiscussionType';
import Gifted from '../components/message/Gifted';
import Header from '../components/public/header/Header';
import { Ionicons } from '@expo/vector-icons';
import { MessageScreenRouteProp } from '../navigations/MessageNavigator';
import ScreenContainer from '../components/public/ScreenContainer';
import { globalStyles } from '../styles/global';
import { useMessages } from '../api/message/messages/service';
import { useRoute } from '@react-navigation/core';

const MessageScreen: React.FC = () => {
  const {
    params: { discussion },
  } = useRoute<MessageScreenRouteProp>();
  const { data, loading } = useMessages({
    discussionId: discussion.id,
    paginationInput: {
      limit: 10,
      page: 1,
    },
  });

  const messages = data ? data.messages.data : [];

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
      <Gifted messages={messages} />
    </ScreenContainer>
  );
};

export default MessageScreen;
