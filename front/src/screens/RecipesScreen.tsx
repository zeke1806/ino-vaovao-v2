import * as React from 'react';

import {
  useDiscoveryDispatch,
  useDiscoveryState,
} from '../providers/discovery/discovery.consumer';

import BackBtn from '../components/public/BackBtn';
import Header from '../components/public/header/Header';
import List from '../components/recipes/List';
import { RecipesScreenRouteProp } from '../navigations/MainNavigator';
import ScreenContainer from '../components/public/ScreenContainer';
import SearchBar from '../components/public/SearchBar';
import { useRoute } from '@react-navigation/core';

const RecipesScreen: React.FC = () => {
  const {
    params: { type },
  } = useRoute<RecipesScreenRouteProp>();
  const dispatch = useDiscoveryDispatch();
  const { searchRecipe } = useDiscoveryState();

  return (
    <ScreenContainer>
      <Header left={<BackBtn />} title={type.toUpperCase()} />
      <SearchBar
        value={searchRecipe}
        onChange={(value): void => {
          dispatch({ type: 'CHANGE_SEARCH_RECIPE', value });
        }}
      />
      <List />
    </ScreenContainer>
  );
};

export default RecipesScreen;
