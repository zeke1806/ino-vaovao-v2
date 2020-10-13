import * as React from 'react';
import BackBtn from '../components/public/BackBtn';
import DiscussionType from '../components/message/discussion-type/DiscussionType';
import Gifted from '../components/message/Gifted';
import Header from '../components/public/header/Header';
import ScreenContainer from '../components/public/ScreenContainer';

const MessageScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <Header left={<BackBtn />} title="Nouveau message" />
      <DiscussionType />
      <Gifted />
    </ScreenContainer>
  );
};

export default MessageScreen;
