import * as React from 'react';
import BackBtn from '../components/public/BackBtn';
import Header from '../components/public/header/Header';
import ScreenContainer from '../components/public/ScreenContainer';

const NameGroupScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <Header left={<BackBtn />} title="Nouveau groupe" />
    </ScreenContainer>
  );
};

export default NameGroupScreen;
