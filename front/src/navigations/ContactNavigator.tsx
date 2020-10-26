import * as React from 'react';

import FriendScreen from '../screens/FriendScreen';
import { createStackNavigator } from '@react-navigation/stack';

type ContactNavigatorParamList = {
  Friend: undefined;
  Request: undefined;
  Suggestion: undefined;
};

const Stack = createStackNavigator<ContactNavigatorParamList>();

const ContactNavigator: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Friend" component={FriendScreen} />
    </Stack.Navigator>
  );
};

export default ContactNavigator;
