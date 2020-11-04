import * as React from 'react';

import BackBtn from '../components/public/BackBtn';
import Header from '../components/public/header/Header';
import Member from '../components/name-group/Member';
import NameInput from '../components/name-group/NameInput';
import NextBtn from '../components/name-group/NextBtn';
import ScreenContainer from '../components/public/ScreenContainer';
import Titles from '../components/public/Titles';
import { View } from 'native-base';

const NameGroupScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <Header left={<BackBtn />} title="Nouveau groupe" right={<NextBtn />} />
      <View style={{ alignItems: 'center' }}>
        <Titles type="h2" text="Nommer votre discussion" />
      </View>
      <NameInput />
      <Member />
    </ScreenContainer>
  );
};

export default NameGroupScreen;
