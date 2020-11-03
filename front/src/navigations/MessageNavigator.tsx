import * as React from 'react';

import { Discussion, User } from '../api/types';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import MessageScreen from '../screens/MessageScreen';
import NameGroupScreen from '../screens/NameGroupScreen';
import { RouteProp } from '@react-navigation/core';
import SelectRecipientScreen from '../screens/SelectRecipientScreen';

export type MessageScreenParams = {
  discussion: Discussion;
};
export type NameGroupParams = {
  members: User[];
};
export type MessageNavigatorParamList = {
  SelectRecipient: undefined;
  NameGroup: NameGroupParams;
  Message: MessageScreenParams;
};

const Stack = createStackNavigator<MessageNavigatorParamList>();

export type SelectRecipientScreenProps = StackNavigationProp<
  MessageNavigatorParamList,
  'SelectRecipient'
>;

export type NameGroupScreenRouteProp = RouteProp<
  MessageNavigatorParamList,
  'NameGroup'
>;

export type MessageScreenRouteProp = RouteProp<
  MessageNavigatorParamList,
  'Message'
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
