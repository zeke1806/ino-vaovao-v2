import * as React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Button, Text, View } from 'native-base';
import { LoginInput } from '../../api/types';
import NameInput from './NameInput';
import PasswordInput from './PasswordInput';
import { RegisterScreenProps } from '../../navigations/AuthenticationNavigator';
import SubmitBtn from '../public/SubmitBtn';
import VerticalFormSpace from '../public/VerticalFormSpace';
import { globalStyles } from '../../styles/global';
import { screenHeight } from '../../utils/Styles';
import { useNavigation } from '@react-navigation/core';

export interface LoginFormProps {
  formInput: LoginInput;
  onChange: (key: keyof LoginInput, text: string) => void;
  onSubmit: () => void;
  error: boolean;
  loading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
  formInput,
  onChange,
  onSubmit,
  error,
  loading,
}) => {
  const navigation = useNavigation<RegisterScreenProps>();

  return (
    <View style={styles.container}>
      <NameInput
        value={formInput.username}
        error={!!(error && !formInput.username)}
        onChange={(value: string): void => {
          onChange('username', value);
        }}
      />

      <VerticalFormSpace />

      <PasswordInput
        error={!!(error && !formInput.password)}
        value={formInput.password}
        onChange={(value: string): void => {
          onChange('password', value);
        }}
      />

      <VerticalFormSpace />

      <View style={styles.btnContainer}>
        <SubmitBtn title="Se connecter" loading={loading} onClick={onSubmit} />
      </View>

      <View style={styles.seConnecterCtn}>
        <Text style={{ color: globalStyles.colors.text2 }}>
          Vous n&apos;avez pas encore de compte?
        </Text>
        <Button
          transparent
          style={{ alignSelf: 'center' }}
          onPress={(): void => navigation.navigate('Register')}
        >
          <Text style={{ color: globalStyles.colors.primary }}>
            S&apos;inscrire
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

  seConnecterCtn: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: spaceY,
  },
});

export default LoginForm;
