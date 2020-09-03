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
}

const RegisterForm: React.FC<RegisterFormProps> = ({ formInput }) => {
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

  return (
    <View style={styles.container}>
      <Item>
        <AntDesign
          name="smileo"
          size={24}
          color={globalStyles.iconColor.color}
          style={styles.marginRight}
        />
        <Input placeholder="Nom" value={formInput?.username} />
      </Item>

      <View style={{ height: 5 }}></View>

      <Item>
        <AntDesign
          name="lock"
          size={24}
          color={!passwordValid() ? globalStyles.iconColor.color : 'green'}
          style={styles.marginRight}
        />
        <Input placeholder="Mot de passe" value={formInput?.password} />
        <AntDesign name="eye" size={24} color={globalStyles.iconColor.color} />
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
        />
      </Item>

      <View style={styles.btnContainer}>
        <Button rounded style={styles.submitBtn}>
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
