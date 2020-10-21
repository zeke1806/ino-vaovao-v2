import * as React from 'react';
import { DiscoveryCategoryRouteProp } from '../navigations/MainNavigator';
import ScreenContainer from '../components/public/ScreenContainer';
import { Text } from 'native-base';
import { useRoute } from '@react-navigation/core';

const DiscoveryCategoryScreen: React.FC = () => {
  const route = useRoute<DiscoveryCategoryRouteProp>();
  return (
    <ScreenContainer>
      <Text>category screen</Text>
    </ScreenContainer>
  );
};

export default DiscoveryCategoryScreen;
