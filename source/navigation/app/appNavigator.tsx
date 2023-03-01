/** @format */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors, IS_DARK_MODE, RootRoutes } from '~/constants';
import { TabIcon } from '~/components';
import { RootStackParamList } from '~/navigation/types';
import { Dashboard, Settings } from '~/screens/App';

const Tab = createBottomTabNavigator<RootStackParamList>();
const AppStack = createNativeStackNavigator<RootStackParamList>();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: props => {
          return <TabIcon route={route.name} {...props} />;
        },
        tabBarLabel: () => null,
        tabBarActiveTintColor: IS_DARK_MODE ? colors._ECFF77 : colors._F56B63,
        tabBarInactiveTintColor: IS_DARK_MODE ? colors._white : colors._black,
        tabBarStyle: {
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
          borderTopWidth: 0,
          position: 'absolute',
          backgroundColor: IS_DARK_MODE ? colors._black_rgb : colors._white_rgb,
        },
      })}
    >
      <Tab.Screen
        name={RootRoutes.DASHBOARD}
        component={Dashboard}
        options={{ tabBarLabel: 'Dashboard' }}
      />
      <Tab.Screen
        name={RootRoutes.SETTINGS}
        component={Settings}
        options={{ tabBarLabel: 'Settings' }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={RootRoutes.MAIN_TAB_NAVIGATOR}
    >
      <AppStack.Screen
        name={RootRoutes.MAIN_TAB_NAVIGATOR}
        component={MainTabNavigator}
      />
    </AppStack.Navigator>
  );
};
