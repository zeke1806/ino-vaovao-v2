import * as React from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Image, ImageSourcePropType } from 'react-native';
import { TAB_BAR_DISCOVERY, TAB_BAR_DISCUSSION } from '../utils/Icons';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import DiscussionScreen from '../screens/DiscussionScreen';
import { RouteProp } from '@react-navigation/core';
import { globalStyles } from '../styles/global';

type TabParamList = {
  Discussion: undefined;
  Discovery: undefined;
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
  'Discovery'
>;
export type DiscoveryScreenRoute = RouteProp<TabParamList, 'Discovery'>;
export type DiscoveryScreenNavigationProps = {
  navigation: DiscoveryScreenNavigation;
  route: DiscoveryScreenRoute;
};

const Icon: React.FC<{ img: unknown }> = ({ img }) => (
  <Image
    source={img as ImageSourcePropType}
    style={{
      width: globalStyles.iconSize * 2,
      height: globalStyles.iconSize * 2,
    }}
  />
);

const HomeNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
        },
        activeTintColor: globalStyles.colors.primary,
        labelStyle: {
          marginTop: 10,
          fontSize: 15,
        },
        tabStyle: {
          paddingBottom: 2,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon(): React.ReactNode {
            return <Icon img={TAB_BAR_DISCUSSION} />;
          },
        }}
        name="Discussion"
        component={DiscussionScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon(): React.ReactNode {
            return <Icon img={TAB_BAR_DISCOVERY} />;
          },
        }}
        name="Discovery"
        component={DiscoveryScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
