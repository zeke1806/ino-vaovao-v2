import * as React from 'react';
import Category from '../components/discovery/category/Category';
import ForYou from '../components/discovery/for-you/ForYou';
import Header from '../components/discovery/Header';
import ScreenContainer from '../components/public/ScreenContainer';

const DiscoveryScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <Header />
      <Category />
      <ForYou />
    </ScreenContainer>
  );
};

export default DiscoveryScreen;
