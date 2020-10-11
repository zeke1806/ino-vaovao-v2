import * as React from 'react';
import { Text, Thumbnail, View } from 'native-base';
import { ImageSourcePropType } from 'react-native';
import Titles from '../../public/Titles';
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
      <View style={{ marginBottom: globalStyles.space }}>
        <Titles text={title} type="h3" />
      </View>

      <Text>{value}</Text>
    </View>
  </View>
);

export default Field;
