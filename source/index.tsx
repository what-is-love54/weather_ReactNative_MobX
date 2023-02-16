/** @format */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
// import RNBootSplash from 'react-native-bootsplash';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
// screens
import { Dashboard } from '~/screens/App';
// const
import { colors } from '~/constants';
// utils
import './services/i18n';
import { navigationRef } from '~/utils';
import { useAppInit } from '~/hooks';

enableScreens();

export const App: React.FC<any> = () => {
  const { isInitLoading } = useAppInit();

  if (isInitLoading) {
    return null;
  }

  // useEffect(() => {
  //   const init = async () => {
  //     // can load some api
  //   };
  //
  //   init().finally(async () => {
  //     await RNBootSplash.hide({ fade: false, duration: 200 });
  //   });
  // }, []);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={colors._transparent}
      />
      <NavigationContainer ref={navigationRef}>
        <Dashboard />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
