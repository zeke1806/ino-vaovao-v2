import * as React from 'react';
import { Input, Item } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { globalStyles } from '../../styles/global';

export interface NameInputProps {
  error: boolean;
  value: string;
  onChange: (value: string) => void;
}

const NameInput: React.FC<NameInputProps> = ({ error, value, onChange }) => (
  <Item error={error}>
    <AntDesign
      name="smileo"
      size={globalStyles.iconSize}
      color={globalStyles.colors.icon}
      style={{
        marginRight: 15,
      }}
    />
    <Input
      placeholder="Nom"
      value={value}
      onChangeText={(text): void => onChange(text)}
    />
  </Item>
);

export default NameInput;
