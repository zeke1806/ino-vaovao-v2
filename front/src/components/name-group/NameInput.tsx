import * as React from 'react';

import { ASTERISK } from '../../utils/Icons';
import { Image } from 'react-native';
import RoundedInput from '../public/RoundedInput';
import { View } from 'native-base';
import { globalStyles } from '../../styles/global';
import { useNameGroupe } from '../../providers/nameGroupe';

const NameInput: React.FC = () => {
  const { name, setName } = useNameGroupe();
  const { iconSize, space } = globalStyles;
  return (
    <View style={{ paddingHorizontal: space * 3, marginTop: space }}>
      <RoundedInput
        value={name}
        onChange={(value): void => setName(value)}
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
