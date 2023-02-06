/** @format */

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
// lib
import RNBootSplash from 'react-native-bootsplash';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
// screens
import Dashboard from '~/screens/App/Dashboard';
// const
import { colors } from '~/constants';

function App(): JSX.Element {
  useEffect(() => {
    const init = async () => {
      // can load some api
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: false, duration: 200 });
    });
  }, []);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={colors._transparent}
      />
      <Dashboard />
    </SafeAreaProvider>
  );
}

export default App;
