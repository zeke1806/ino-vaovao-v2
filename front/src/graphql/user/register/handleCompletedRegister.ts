import { Alert } from 'react-native';
import { AuthenticationNavigatorParamList } from '../../../navigations/AuthenticationNavigator';
import { RegisterResult } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';

export function handleRegisterCompleted(
  result: RegisterResult,
  resetForm: () => void,
  navigation: StackNavigationProp<AuthenticationNavigatorParamList, 'Register'>,
): void {
  if (result.__typename === 'User') {
    resetForm();
    navigation.navigate('SuccessRegister');
  } else if (result.__typename === 'RegisterError') {
    Alert.alert(
      'Erreur',
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      result.fieldEmpty! || result.usernameNotAvailable!,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  }
}
