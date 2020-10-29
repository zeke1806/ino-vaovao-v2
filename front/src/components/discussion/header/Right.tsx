import * as React from 'react';

import ContactIcon from './ContactIcon';
import { HomeNavigatorProps } from '../../../navigations/MainNavigator';
import IconWithBadge from '../../public/IconWithBadge';
import { PENCIL_LIGHT } from '../../../utils/Icons';
import { View } from 'native-base';
import { useNavigation } from '@react-navigation/core';

const Right: React.FC = () => {
  const navigation = useNavigation<HomeNavigatorProps>();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <ContactIcon />
      <IconWithBadge
        img={PENCIL_LIGHT}
        onPress={(): void => {
          navigation.navigate('MessageNavigator');
        }}
      />
    </View>
  );
};

export default Right;
