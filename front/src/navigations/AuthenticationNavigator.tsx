import * as React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SuccessRegisterScreen from '../screens/SuccessRegisterScreen';

export type AuthenticationNavigatorParamList = {
  Register: undefined;
  SuccessRegister: undefined;
  Login: undefined;
};

export type RegisterScreenProps = StackNavigationProp<
  AuthenticationNavigatorParamList,
  'Register'
>;

export type SuccessRegisterProps = StackNavigationProp<
  AuthenticationNavigatorParamList,
  'SuccessRegister'
>;

const Stack = createStackNavigator<AuthenticationNavigatorParamList>();

function AuthenticationNavigator(): React.ReactElement {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="SuccessRegister" component={SuccessRegisterScreen} />
    </Stack.Navigator>
  );
}

export default AuthenticationNavigator;
