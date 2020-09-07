import { Alert, AlertButton, AlertOptions } from 'react-native';
import { RegisterError, User } from '../../types';
import { AuthenticationNavigatorParamList } from '../../../navigations/AuthenticationNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { handleRegisterCompleted } from './handleCompletedRegister';

function generateMocks(): {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resetForm: jest.Mock<any, any>;
  navigation: StackNavigationProp<AuthenticationNavigatorParamList, 'Register'>;
  spyAlert: jest.SpyInstance<
    void,
    [string, string?, AlertButton[]?, AlertOptions?]
  >;
} {
  const resetForm = jest.fn();
  const navigation = ({
    navigate: jest.fn(),
  } as unknown) as StackNavigationProp<
    AuthenticationNavigatorParamList,
    'Register'
  >;
  const spyAlert = jest.spyOn(Alert, 'alert');
  return {
    resetForm,
    navigation,
    spyAlert,
  };
}

describe('handleCompletedRegister', () => {
  it('should navigate to register success screen', () => {
    const result: Partial<User> = {
      __typename: 'User',
    };
    const { resetForm, navigation, spyAlert } = generateMocks();

    handleRegisterCompleted(result as User, resetForm, navigation);
    expect(resetForm).toHaveBeenCalled();
    expect(navigation.navigate).toHaveBeenCalled();
    expect(spyAlert).not.toHaveBeenCalled();
  });

  it('should show an error alert', () => {
    const result: Partial<RegisterError> = {
      __typename: 'RegisterError',
    };
    const { resetForm, navigation, spyAlert } = generateMocks();

    handleRegisterCompleted(result as RegisterError, resetForm, navigation);
    expect(resetForm).not.toHaveBeenCalled();
    expect(navigation.navigate).not.toHaveBeenCalled();
    expect(spyAlert).toHaveBeenCalled();
  });
});
