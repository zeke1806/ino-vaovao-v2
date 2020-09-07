import * as React from 'react';
import RegisterScreen from '../screens/RegisterScreen';
import SuccessRegisterScreen from '../screens/SuccessRegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';

export type AuthenticationNavigatorParamList = {
  Register: undefined;
  SuccessRegister: undefined;
};

const Stack = createStackNavigator<AuthenticationNavigatorParamList>();

function AuthenticationNavigator(): React.ReactElement {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="SuccessRegister" component={SuccessRegisterScreen} />
    </Stack.Navigator>
  );
}

export default AuthenticationNavigator;
