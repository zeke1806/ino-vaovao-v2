import * as React from 'react';

import AuthenticationNavigator from './AuthenticationNavigator';
import MainNavigator from './MainNavigator';
import PresentationNavigator from './PresentationNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { useGlobalSubscription } from '../api/globalSubscription';
import { useSessionState } from '../providers/session/session.consumer';

type RootNavigatorParamList = {
  Presentation: undefined;
  Authentication: undefined;
  Main: undefined;
};

const Stack = createStackNavigator<RootNavigatorParamList>();

function RootNavigator(): React.ReactElement {
  useGlobalSubscription();
  const sessionState = useSessionState();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {sessionState.firstUsage && (
        <Stack.Screen name="Presentation" component={PresentationNavigator} />
      )}

      {sessionState.connected ? (
        <Stack.Screen name="Main" component={MainNavigator} />
      ) : (
        <Stack.Screen
          name="Authentication"
          component={AuthenticationNavigator}
        />
      )}
    </Stack.Navigator>
  );
}

export default RootNavigator;
