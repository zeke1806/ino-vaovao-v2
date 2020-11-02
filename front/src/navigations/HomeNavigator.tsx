import * as React from 'react';

import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { TAB_BAR_DISCOVERY, TAB_BAR_DISCUSSION } from '../utils/Icons';

import { CompositeNavigationProp } from '@react-navigation/native';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import DiscussionScreen from '../screens/DiscussionScreen';
import IconWithBadge from '../components/public/IconWithBadge';
import { MessageNavigatorParamList } from './MessageNavigator';
import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { globalStyles } from '../styles/global';
import { useUserDiscussions } from '../api/discussion/user-discussions/service';

type TabParamList = {
  Discussion: undefined;
  Decouverte: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export type DiscussionScreenNavigation = BottomTabNavigationProp<
  TabParamList,
  'Discussion'
>;

export type DiscussionScreenRoute = RouteProp<TabParamList, 'Discussion'>;
export type DiscussionScreenNavigationProps = {
  navigation: DiscussionScreenNavigation;
  route: DiscussionScreenRoute;
};

export type DiscoveryScreenNavigation = BottomTabNavigationProp<
  TabParamList,
  'Decouverte'
>;
export type DiscoveryScreenRoute = RouteProp<TabParamList, 'Decouverte'>;
export type DiscoveryScreenNavigationProps = {
  navigation: DiscoveryScreenNavigation;
  route: DiscoveryScreenRoute;
};

const HomeNavigator: React.FC = () => {
  const { data } = useUserDiscussions();

  const unread = (): string => {
    if (!data) return '0';
    return String(
      data.userDiscussions.filter((ud) => !ud.lastMessage.view).length,
    );
  };

  const iconSize = globalStyles.iconSize * 2;

  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: 'transparent',
          borderTopWidth: 1,
          elevation: 0,
          height: globalStyles.iconSize * 3,
        },
        activeTintColor: globalStyles.colors.primary,
        labelStyle: {
          marginTop: 10,
          fontSize: 15,
        },
        tabStyle: {
          paddingTop: globalStyles.space * 2,
          paddingBottom: globalStyles.space / 4,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon(): React.ReactNode {
            return (
              <IconWithBadge
                img={TAB_BAR_DISCUSSION}
                size={iconSize}
                badge={unread()}
                badgePosition={{
                  top: -5,
                  right: 0,
                }}
              />
            );
          },
        }}
        name="Discussion"
        component={DiscussionScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon(): React.ReactNode {
            return <IconWithBadge img={TAB_BAR_DISCOVERY} size={iconSize} />;
          },
        }}
        name="Decouverte"
        component={DiscoveryScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
