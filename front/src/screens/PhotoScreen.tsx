import * as React from 'react';
import { PhotoScreenNavigationProps } from '../navigations/ProfileNavigator';
import { Text } from 'react-native';

type PhotoScreenProps = PhotoScreenNavigationProps;

const PhotoScreen: React.FC<PhotoScreenProps> = ({ navigation, route }) => {
  return <Text>Photo screen</Text>;
};

export default PhotoScreen;
