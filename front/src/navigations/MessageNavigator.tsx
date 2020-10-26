import * as React from 'react';

import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import MessageScreen from '../screens/MessageScreen';
import NameGroupScreen from '../screens/NameGroupScreen';
import SelectRecipientScreen from '../screens/SelectRecipientScreen';

type MessageNavigatorParamList = {
  SelectRecipient: undefined;
  NameGroup: undefined;
  Message: undefined;
};

const Stack = createStackNavigator<MessageNavigatorParamList>();

export type SelectRecipientScreenProps = StackNavigationProp<
  MessageNavigatorParamList,
  'SelectRecipient'
>;

const MessageNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SelectRecipient" component={SelectRecipientScreen} />
      <Stack.Screen name="NameGroup" component={NameGroupScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
    </Stack.Navigator>
  );
};

export default MessageNavigator;
