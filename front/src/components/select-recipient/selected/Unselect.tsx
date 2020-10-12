import * as React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { UNSELECT } from '../../../utils/Icons';
import { globalStyles } from '../../../styles/global';

const Unselect: React.FC = () => {
  return (
    <TouchableOpacity>
      <Image
        source={UNSELECT}
        style={{ width: globalStyles.iconSize, height: globalStyles.iconSize }}
      />
    </TouchableOpacity>
  );
};

export default Unselect;
