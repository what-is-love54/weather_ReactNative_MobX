/** @format */

import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { RootStack } from '~/constants';
import { AppNavigator } from '~/navigation/app/appNavigator';
import { userAPI } from '~/api';

const RootNavigationStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = observer(() => {
  const load = async () => {
    try {
      await userAPI.getWeather('London');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <RootNavigationStack.Navigator screenOptions={{ headerShown: false }}>
      <RootNavigationStack.Screen
        name={RootStack.App}
        component={AppNavigator}
      />
    </RootNavigationStack.Navigator>
  );
});
