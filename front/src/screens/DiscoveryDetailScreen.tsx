import * as React from 'react';

import { Image, ScrollView } from 'react-native';

import BackBtn from '../components/public/BackBtn';
import { DiscoveryDetailScreenRouteProp } from '../navigations/MainNavigator';
import Header from '../components/public/header/Header';
import ScreenContainer from '../components/public/ScreenContainer';
import { Text } from 'native-base';
import { globalStyles } from '../styles/global';
import { screenHeight } from '../utils/Styles';
import { useRoute } from '@react-navigation/core';

const DiscoveryDetailScreen: React.FC = () => {
  const {
    params: { image, title, content },
  } = useRoute<DiscoveryDetailScreenRouteProp>();
  return (
    <ScrollView>
      <ScreenContainer>
        <Header left={<BackBtn />} title={title} />
        <Image
          source={{ uri: image }}
          style={[
            {
              width: '100%',
              height: screenHeight / 3,
              borderRadius: globalStyles.space,
              marginBottom: globalStyles.space,
            },
          ]}
        />
        <Text>{content}</Text>
      </ScreenContainer>
    </ScrollView>
  );
};

export default DiscoveryDetailScreen;
