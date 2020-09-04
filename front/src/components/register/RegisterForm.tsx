import * as React from 'react';
import { Button, Input, Item, Text, View } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/global';
import { screenHeight } from '../../utils/Styles';

interface RegisterFormInput {
  username: string;
  password: string;
  validatePassword: string;
}
export interface RegisterFormProps {
  formInput?: RegisterFormInput;
  onChange?: (key: keyof RegisterFormInput, text: string) => void;
  onSubmit?: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  formInput,
  onChange,
  onSubmit,
}) => {
  const [secureText, setSecureText] = React.useState(false);

  const passwordValid = (): boolean => {
    if (
      formInput &&
      formInput.password &&
      formInput.validatePassword &&
      formInput.password === formInput.validatePassword
    ) {
      return true;
    }

    return false;
  };

  const toogleSecureTextEntry = (): void => {
    setSecureText(!secureText);
  };

  return (
    <View style={styles.container}>
      <Item>
        <AntDesign
          name="smileo"
          size={24}
          color={globalStyles.iconColor.color}
          style={styles.marginRight}
        />
        <Input
          placeholder="Nom"
          value={formInput?.username}
          onChangeText={(text): void => {
            onChange && onChange('username', text);
          }}
        />
      </Item>

      <View style={{ height: 5 }}></View>

      <Item>
        <AntDesign
          name="lock"
          size={24}
          color={!passwordValid() ? globalStyles.iconColor.color : 'green'}
          style={styles.marginRight}
        />
        <Input
          placeholder="Mot de passe"
          value={formInput?.password}
          secureTextEntry={secureText}
          onChangeText={(text): void => {
            onChange && onChange('password', text);
          }}
        />
        <AntDesign
          name="eye"
          size={24}
          color={globalStyles.iconColor.color}
          onPress={toogleSecureTextEntry}
        />
      </Item>

      <View style={{ height: 5 }}></View>

      <Item>
        <AntDesign
          name="lock"
          size={24}
          color={!passwordValid() ? globalStyles.iconColor.color : 'green'}
          style={styles.marginRight}
        />
        <Input
          placeholder="Valider votre mot de passe"
          value={formInput?.validatePassword}
          onChangeText={(text): void => {
            onChange && onChange('validatePassword', text);
          }}
        />
      </Item>

      <View style={styles.btnContainer}>
        <Button rounded style={styles.submitBtn} onPress={onSubmit}>
          <Text>S&apos;inscrire</Text>
        </Button>
      </View>
    </View>
  );
};

const spaceY = (screenHeight * 7) / 100;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },

  btnContainer: {
    alignItems: 'center',
    marginTop: spaceY * 2,
  },

  submitBtn: {
    backgroundColor: '#E8808C',
  },

  marginRight: {
    marginRight: 15,
  },
});

export default RegisterForm;
