import * as React from 'react';
import AuthenticationNavigator from './AuthenticationNavigator';
import { NavigationContainer } from '@react-navigation/native';
import PresentationNavigator from './PresentationNavigator';
import { createStackNavigator } from '@react-navigation/stack';

type RootNavigatorParamList = {
  Presentation: undefined;
  Authentication: undefined;
};

const Stack = createStackNavigator<RootNavigatorParamList>();

function RootNavigator(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Presentation" component={PresentationNavigator} />
        <Stack.Screen
          name="Authentication"
          component={AuthenticationNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
