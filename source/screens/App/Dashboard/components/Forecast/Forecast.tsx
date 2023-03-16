/** @format */

import React from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';
// inner
import { styles } from './styles';

export const Forecast: React.FC<any> = observer(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.innerContainer}>Forecast Weather</Text>
      <Text style={styles.innerContainer}>Forecast Weather</Text>
      <Text style={styles.innerContainer}>Forecast Weather</Text>
      <Text style={styles.innerContainer}>Forecast Weather</Text>
      <Text style={styles.innerContainer}>Forecast Weather</Text>
      <Text style={styles.innerContainer}>Forecast Weather</Text>
    </View>
  );
});
