import * as React from 'react';
import { ASTERISK } from '../../utils/Icons';
import { Image } from 'react-native';
import RoundedInput from '../public/RoundedInput';
import { View } from 'native-base';
import { globalStyles } from '../../styles/global';

const NameInput: React.FC = () => {
  const { iconSize, space } = globalStyles;
  return (
    <View style={{ paddingHorizontal: space * 3, marginTop: space }}>
      <RoundedInput
        placeholder="Nom du groupe"
        rightIcon={
          <Image
            source={ASTERISK}
            style={{ width: iconSize, height: iconSize }}
          />
        }
      />
    </View>
  );
};

export default NameInput;
