import * as React from 'react';

import BackBtn from '../components/public/BackBtn';
import Header from '../components/public/header/Header';
import { RecipesScreenRouteProp } from '../navigations/MainNavigator';
import ScreenContainer from '../components/public/ScreenContainer';
import SearchBar from '../components/public/SearchBar';
import { useRoute } from '@react-navigation/core';

const RecipesScreen: React.FC = () => {
  const {
    params: { type },
  } = useRoute<RecipesScreenRouteProp>();
  return (
    <ScreenContainer>
      <Header left={<BackBtn />} title={type.toUpperCase()} />
      <SearchBar />
    </ScreenContainer>
  );
};

export default RecipesScreen;
