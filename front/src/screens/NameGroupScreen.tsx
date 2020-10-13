import * as React from 'react';
import BackBtn from '../components/public/BackBtn';
import Header from '../components/public/header/Header';
import NameInput from '../components/name-group/NameInput';
import ScreenContainer from '../components/public/ScreenContainer';
import Titles from '../components/public/Titles';
import { View } from 'native-base';

const NameGroupScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <Header left={<BackBtn />} title="Nouveau groupe" />
      <View style={{ alignItems: 'center' }}>
        <Titles type="h2" text="Nommer votre discussion" />
      </View>
      <NameInput />
    </ScreenContainer>
  );
};

export default NameGroupScreen;
