import * as React from 'react';
import MasonryList from 'react-native-masonry-list';
import { PhotoProfile } from '../../../graphql/types';
import { Text } from 'native-base';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

export interface MasonryProps {
  photos: PhotoProfile[];
}

const Masonry: React.FC<MasonryProps> = ({ photos }) => {
  return (
    <MasonryList
      columns={3}
      images={photos.map((photo) => ({
        uri: photo.url,
        dimensions: { width: 1080, height: 1920 },
      }))}
      emptyView={(): JSX.Element => <Text>Vide</Text>}
      imageContainerStyle={{
        backgroundColor: 'transparent',
      }}
    />
  );
};

export default Masonry;
