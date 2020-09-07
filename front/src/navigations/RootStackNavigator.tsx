import * as React from 'react';
import AuthenticationNavigator from './AuthenticationNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function RootNavigator(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Authentication"
          component={AuthenticationNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
