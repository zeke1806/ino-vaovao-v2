import * as React from 'react';
import { CONTACT, PENCIL_LIGHT } from '../../../utils/Icons';
import { Image, ImageSourcePropType } from 'react-native';
import { View } from 'native-base';
import { globalStyles } from '../../../styles/global';

const Right: React.FC = () => {
  const icon = (img: ImageSourcePropType): React.ReactElement => (
    <Image
      style={{
        width: globalStyles.iconSize * 1.2,
        height: globalStyles.iconSize * 1.2,
        marginHorizontal: 3,
      }}
      source={img}
    />
  );

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {icon(CONTACT)}
      {icon(PENCIL_LIGHT)}
    </View>
  );
};

export default Right;
