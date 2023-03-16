/** @format */

import React from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';
// inner
import { styles } from './styles';

export const MainInfo: React.FC<any> = observer(
  ({ city, temperature, condition }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.locationName}>{city}</Text>
        <Text style={styles.locationTemperature}>{temperature}&deg;</Text>
        <Text style={styles.locationCloud}>{condition}</Text>
      </View>
    );
  },
);
