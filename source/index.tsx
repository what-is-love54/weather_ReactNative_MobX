/** @format */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
// common
import { colors, IS_DARK_MODE } from '~/constants';
import { navigationRef } from '~/utils';
import { useAppInit } from '~/hooks';
import { RootNavigation } from '~/navigation/rootNavigation';
import { Store, userStore, settingsStore } from '~/store/rootStore';
// inner
import './services/i18n';

enableScreens();

export const App = () => {
  useAppInit();

  return (
    <Store.Provider value={{ userStore, settingsStore }}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <StatusBar
          barStyle={IS_DARK_MODE ? 'light-content' : 'dark-content'}
          translucent
          backgroundColor={IS_DARK_MODE ? colors._black_rgb : colors._white_rgb}
        />
        <NavigationContainer ref={navigationRef}>
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </Store.Provider>
  );
};
