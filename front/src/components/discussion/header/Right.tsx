import * as React from 'react';
import { CONTACT, PENCIL_LIGHT } from '../../../utils/Icons';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { HomeScreenProps } from '../../../navigations/MainNavigator';
import { View } from 'native-base';
import { globalStyles } from '../../../styles/global';
import { useNavigation } from '@react-navigation/core';

const Right: React.FC = () => {
  const navigation = useNavigation<HomeScreenProps>();

  const icon = (
    img: ImageSourcePropType,
    onPress?: () => void,
  ): React.ReactElement => (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={{
          width: globalStyles.iconSize * 1.2,
          height: globalStyles.iconSize * 1.2,
          marginHorizontal: 3,
        }}
        source={img}
      />
    </TouchableOpacity>
  );

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {icon(CONTACT)}
      {icon(PENCIL_LIGHT, () => {
        navigation.navigate('SelectRecipient');
      })}
    </View>
  );
};

export default Right;
