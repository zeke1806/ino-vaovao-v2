import * as React from 'react';
import BackBtn from '../components/public/BackBtn';
import Header from '../components/public/header/Header';
import NextBtn from '../components/select-recipient/NextBtn';
import ScreenContainer from '../components/public/ScreenContainer';
import Search from '../components/select-recipient/Search';
import Selected from '../components/select-recipient/selected/Selected';

const SelectRecipient: React.FC = () => {
  return (
    <ScreenContainer>
      <Header
        left={<BackBtn />}
        title="Ajouter des participants"
        right={<NextBtn />}
      />
      <Search />
      <Selected />
    </ScreenContainer>
  );
};

export default SelectRecipient;
