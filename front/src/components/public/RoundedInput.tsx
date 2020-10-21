import * as React from 'react';

import { TextInput } from 'react-native';
import { View } from 'native-base';
import { globalStyles } from '../../styles/global';

interface RoundedInput {
  placeholder: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
}

const RoundedInput: React.FC<RoundedInput> = ({
  placeholder,
  leftIcon,
  rightIcon,
  value,
  onChange,
}) => {
  return (
    <View
      style={[
        globalStyles.elevation,
        {
          backgroundColor: 'white',
          borderRadius: 100,
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
      ]}
    >
      <View style={{ flexDirection: 'row' }}>
        {leftIcon}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
        />
      </View>
      {rightIcon}
    </View>
  );
};

export default RoundedInput;
