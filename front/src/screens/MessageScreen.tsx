import * as React from 'react';
import BackBtn from '../components/public/BackBtn';
import Header from '../components/public/header/Header';
import ScreenContainer from '../components/public/ScreenContainer';

const MessageScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <Header left={<BackBtn />} title="Nouveau message" />
    </ScreenContainer>
  );
};

export default MessageScreen;
