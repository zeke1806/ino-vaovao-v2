import * as React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import CommonAvatar from '../../public/CommonAvatar';
import { UNSELECT } from '../../../utils/Icons';
import { View } from 'native-base';
import { globalStyles } from '../../../styles/global';

const Unselect: React.FC = () => {
  const space = globalStyles.space / 5;
  const iconSize = globalStyles.iconSize * 1.1;
  return (
    <View style={{ position: 'relative' }}>
      <CommonAvatar size="medium" name="ngia" />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: -space,
          right: -space,
        }}
      >
        <Image
          source={UNSELECT}
          style={{
            width: iconSize,
            height: iconSize,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Unselect;
