import * as React from 'react';

import {
  MaterialTopTabNavigationProp,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';

import BackBtn from '../components/public/BackBtn';
import FriendScreen from '../screens/FriendScreen';
import Header from '../components/public/header/Header';
import RequestScreen from '../screens/RequestScreen';
import ScreenContainer from '../components/public/ScreenContainer';
import SuggestionScreen from '../screens/SuggestionScreen';
import { globalStyles } from '../styles/global';

type ContactNavigatorParamList = {
  Friend: undefined;
  Request: undefined;
  Suggestion: undefined;
};

const Tab = createMaterialTopTabNavigator<ContactNavigatorParamList>();

const ContactNavigator: React.FC = () => {
  return (
    <ScreenContainer>
      <Header left={<BackBtn />} title="Contact" />
      <Tab.Navigator
        swipeEnabled={true}
        tabBarOptions={{
          activeTintColor: globalStyles.colors.primary,
          inactiveTintColor: globalStyles.colors.tertiary,
          indicatorStyle: {
            backgroundColor: globalStyles.colors.primary,
          },
          style: {
            marginBottom: globalStyles.space,
          },
        }}
      >
        <Tab.Screen
          name="Friend"
          options={{ title: 'Amis' }}
          component={FriendScreen}
        />
        <Tab.Screen
          name="Request"
          options={{ title: 'Demandes' }}
          component={RequestScreen}
        />
        <Tab.Screen
          name="Suggestion"
          options={{ title: 'Suggestions' }}
          component={SuggestionScreen}
        />
      </Tab.Navigator>
    </ScreenContainer>
  );
};

export default ContactNavigator;
