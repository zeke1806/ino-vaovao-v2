import * as React from 'react';
import { Input, Item } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { globalStyles } from '../../styles/global';

export interface PasswordInputProps {
  error: boolean;
  value: string;
  onChange: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  error,
  onChange,
}) => {
  const [secureText, setSecureText] = React.useState(true);

  const toogleSecureTextEntry = (): void => {
    setSecureText(!secureText);
  };

  return (
    <Item error={error}>
      <AntDesign
        name="lock"
        size={globalStyles.iconSize}
        color={globalStyles.colors.icon}
        style={{ marginRight: 15 }}
      />
      <Input
        placeholder="Mot de passe"
        value={value}
        secureTextEntry={secureText}
        onChangeText={(text): void => {
          onChange(text);
        }}
      />
      <AntDesign
        name={secureText ? 'eye' : 'eyeo'}
        size={24}
        color={globalStyles.colors.icon}
        onPress={toogleSecureTextEntry}
      />
    </Item>
  );
};

export default PasswordInput;
