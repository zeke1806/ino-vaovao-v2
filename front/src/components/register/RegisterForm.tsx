import * as React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Button, Input, Item, Text, View } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { RegisterScreenProps } from '../../navigations/AuthenticationNavigator';
import { globalStyles } from '../../styles/global';
import { screenHeight } from '../../utils/Styles';
import { useNavigation } from '@react-navigation/core';

export interface RegisterFormInput {
  username: string;
  password: string;
  validatePassword: string;
}
export interface RegisterFormProps {
  formInput: RegisterFormInput;
  onChange: (key: keyof RegisterFormInput, text: string) => void;
  onSubmit: () => void;
  error: boolean;
  loading: boolean;
}

const RegisterForm: React.FC<Partial<RegisterFormProps>> = ({
  formInput,
  onChange,
  onSubmit,
  error,
  loading,
}) => {
  const navigation = useNavigation<RegisterScreenProps>();
  const [secureText, setSecureText] = React.useState(true);

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
      <Item error={!!(error && !formInput?.username)}>
        <AntDesign
          name="smileo"
          size={24}
          color={globalStyles.colors.icon}
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

      <Item error={!!(error && !formInput?.password)}>
        <AntDesign
          name="lock"
          size={24}
          color={!passwordValid() ? globalStyles.colors.icon : '#55EFC2'}
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
          name={secureText ? 'eye' : 'eyeo'}
          size={24}
          color={globalStyles.colors.icon}
          onPress={toogleSecureTextEntry}
        />
      </Item>

      <View style={{ height: 5 }}></View>

      <Item error={!!(error && !formInput?.validatePassword)}>
        <AntDesign
          name="lock"
          size={24}
          color={!passwordValid() ? globalStyles.colors.icon : '#55EFC2'}
          style={styles.marginRight}
        />
        <Input
          placeholder="Valider votre mot de passe"
          value={formInput?.validatePassword}
          secureTextEntry={true}
          onChangeText={(text): void => {
            onChange && onChange('validatePassword', text);
          }}
        />
      </Item>

      <View style={styles.btnContainer}>
        <Button rounded style={styles.submitBtn} onPress={onSubmit}>
          <Text>S&apos;inscrire</Text>
          {loading && (
            <View style={styles.loadingCtn}>
              <ActivityIndicator color="white" size="small" />
            </View>
          )}
        </Button>
      </View>

      <View style={styles.seConnecterCtn}>
        <Text style={{ color: globalStyles.colors.text2 }}>
          Vous avez dejas un compte?
        </Text>
        <Button
          transparent
          style={{ alignSelf: 'center' }}
          onPress={(): void => navigation.navigate('Login')}
        >
          <Text style={{ color: globalStyles.colors.primary }}>
            Se connecter
          </Text>
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

  loadingCtn: {
    marginHorizontal: 10,
  },

  submitBtn: {
    backgroundColor: globalStyles.colors.primary,
  },

  seConnecterCtn: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: spaceY,
  },

  marginRight: {
    marginRight: 15,
  },
});

export default RegisterForm;
