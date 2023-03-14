/** @format */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { RootStack } from '~/constants';
import { AppNavigator } from '~/navigation/app/appNavigator';
import { Loading } from '~/screens/Common';
import { useLocationPermission } from '~/hooks';

const RootNavigationStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  const {
    loading: locationPermissionsLoading,
    granted: locationPermissionsGranted,
  } = useLocationPermission();

  if (locationPermissionsLoading) {
    return null;
  }

  return (
    <RootNavigationStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={
        locationPermissionsGranted ? RootStack.App : RootStack.LOADING
      }
    >
      <RootNavigationStack.Screen
        name={RootStack.App}
        component={AppNavigator}
      />

      <RootNavigationStack.Screen
        name={RootStack.LOADING}
        component={Loading}
      />
    </RootNavigationStack.Navigator>
  );
};
