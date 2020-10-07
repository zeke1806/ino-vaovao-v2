import * as React from 'react';
import { Text, View } from 'native-base';
import { PhotoScreenProps as NavigationProps } from '../navigations/ProfileNavigator';

interface PhotoScreenProps {
  navigation: NavigationProps;
}

const PhotoScreen: React.FC<PhotoScreenProps> = () => {
  return (
    <View>
      <Text>Photo screen</Text>
    </View>
  );
};

export default PhotoScreen;
