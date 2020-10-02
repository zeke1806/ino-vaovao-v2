import * as React from 'react';
import { Thumbnail, View } from 'native-base';
import { data } from './data';

const Masonry: React.FC = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: -8,
        width: '100%',
      }}
    >
      {data.map((uri) => (
        <View
          key={uri}
          style={{
            flex,
            height: 250,
            minWidth: 150,
          }}
        >
          <Thumbnail
            square
            source={{
              uri,
            }}
          />
        </View>
      ))}
    </View>
  );
};

export default Masonry;
