import * as React from 'react';

import BackBtn from '../components/public/BackBtn';
import Header from '../components/public/header/Header';
import ScreenContainer from '../components/public/ScreenContainer';

const FriendScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <Header title="Contact" left={<BackBtn />} />
    </ScreenContainer>
  );
};

export default FriendScreen;
