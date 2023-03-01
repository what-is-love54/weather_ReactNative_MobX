/** @format */

import React from 'react';
import { observer } from 'mobx-react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { RootStack } from '~/constants';
import { AppNavigator } from '~/navigation/app/appNavigator';

const RootNavigationStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = observer(() => {
  return (
    <RootNavigationStack.Navigator screenOptions={{ headerShown: false }}>
      <RootNavigationStack.Screen
        name={RootStack.App}
        component={AppNavigator}
      />
    </RootNavigationStack.Navigator>
  );
});
