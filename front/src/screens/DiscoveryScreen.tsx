import * as React from 'react';
import Category from '../components/discovery/category/Category';
import ForYou from '../components/discovery/for-you/ForYou';
import Header from '../components/discovery/header/Header';
import ScreenContainer from '../components/public/ScreenContainer';
import { ScrollView } from 'react-native';
import { useRecipie } from '../external-api/edamam/recipie';
import { useSaveCategory } from '../components/discovery/useSaveCategory';

const DiscoveryScreen: React.FC = () => {
  useSaveCategory();
  useRecipie();
  return (
    <ScreenContainer>
      <ScrollView>
        <Header />
        <Category />
        <ForYou />
      </ScrollView>
    </ScreenContainer>
  );
};

export default DiscoveryScreen;
