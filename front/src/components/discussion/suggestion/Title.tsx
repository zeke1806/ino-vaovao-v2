import * as React from 'react';

import { Image } from 'react-native';
import { SUGGESTION_FRIEND } from '../../../utils/Icons';
import Titles from '../../public/Titles';
import { View } from 'native-base';
import { globalStyles } from '../../../styles/global';

const Title: React.FC = () => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}
  >
    <Image
      source={SUGGESTION_FRIEND}
      style={{
        width: globalStyles.iconSize * 2,
        height: globalStyles.iconSize * 2,
        marginRight: globalStyles.space,
      }}
    />
    <Titles text="Amis" type="h2" />
  </View>
);

export default Title;
