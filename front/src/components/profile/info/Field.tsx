import * as React from 'react';
import { Text, Thumbnail, View } from 'native-base';
import { ImageSourcePropType } from 'react-native';
import { globalStyles } from '../../../styles/global';

const Field: React.FC<{
  img: ImageSourcePropType;
  title: string;
  value: string;
}> = ({ img, title, value }) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
    }}
  >
    <Thumbnail
      source={img}
      style={{
        width: globalStyles.iconSize * 1.5,
        height: globalStyles.iconSize * 1.5,
        marginRight: 10,
      }}
    />
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          color: '#262626',
          marginBottom: 10,
        }}
      >
        {title}
      </Text>
      <Text>{value}</Text>
    </View>
  </View>
);

export default Field;
