import * as React from 'react';

import BackBtn from '../components/public/BackBtn';
import DiscussionType from '../components/message/discussion-type/DiscussionType';
import Gifted from '../components/message/Gifted';
import Header from '../components/public/header/Header';
import { MessageScreenRouteProp } from '../navigations/MessageNavigator';
import ScreenContainer from '../components/public/ScreenContainer';
import { useRoute } from '@react-navigation/core';

const MessageScreen: React.FC = () => {
  const { params } = useRoute<MessageScreenRouteProp>();

  const discussion = params.discussion;

  return (
    <ScreenContainer>
      <Header left={<BackBtn />} title={discussion.name || 'Message'} />
      <DiscussionType discussion={discussion} />
      <Gifted />
    </ScreenContainer>
  );
};

export default MessageScreen;
