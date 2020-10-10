import * as React from 'react';
import MasonryList from 'react-native-masonry-list';
import { PhotoProfile } from '../../../api/types';
import { ProfileScreenProps } from '../../../navigations/ProfileNavigator';
import { Text } from 'native-base';
import { YellowBox } from 'react-native';
import { useNavigation } from '@react-navigation/core';

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

export interface MasonryProps {
  photos: PhotoProfile[];
}

const Masonry: React.FC<MasonryProps> = ({ photos }) => {
  const navigation = useNavigation<ProfileScreenProps>();

  const handlePress = (item: PhotoProfile, index: number): void => {
    navigation.navigate('Photo', {
      photo: item,
    });
  };

  return (
    <MasonryList
      columns={3}
      images={photos.map((photo) => ({
        uri: photo.url,
        id: photo.publicId,
        // dimensions: { width: 1080, height: 1920 },
      }))}
      emptyView={(): JSX.Element => <Text>Vide</Text>}
      imageContainerStyle={{
        backgroundColor: 'transparent',
        maxWidth: 1080,
        maxHeight: 1920,
      }}
      onPressImage={handlePress}
    />
  );
};

export default Masonry;
