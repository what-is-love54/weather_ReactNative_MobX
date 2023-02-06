/** @format */

import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function Dashboard(): JSX.Element {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Math.max(insets.top),
        paddingBottom: Math.max(insets.bottom),
        backgroundColor: '#fff',
      }}
    >
      <Text>Hello world!</Text>
    </View>
  );
}

export default Dashboard;
