/** @format */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { RootStack } from '~/constants';
import { AppNavigator } from '~/navigation/app/appNavigator';
import { Loading } from '~/screens/Common';

const RootNavigationStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  return (
    <RootNavigationStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={RootStack.APP}
    >
      <RootNavigationStack.Screen
        name={RootStack.APP}
        component={AppNavigator}
      />

      <RootNavigationStack.Screen
        name={RootStack.LOADING}
        component={Loading}
      />
    </RootNavigationStack.Navigator>
  );
};
