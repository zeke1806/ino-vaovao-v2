import * as React from 'react';
import MasonryList from 'react-native-masonry-list';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

const Masonry: React.FC = () => {
  return (
    <MasonryList
      columns={3}
      images={[
        {
          uri:
            'https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg',
        },
        {
          source: {
            uri:
              'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
          },
        },
        {
          uri:
            'https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg',
          dimensions: { width: 1080, height: 1920 },
        },
        {
          URI:
            'https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg',
          id: 'blpccx4cn',
        },
        {
          url:
            'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg',
        },
        {
          URL:
            'https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg',
        },
      ]}
    />
  );
};

export default Masonry;
