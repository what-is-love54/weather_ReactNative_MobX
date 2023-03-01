/** @format */

import React from 'react';
import { Text, ScrollView, ImageBackground } from 'react-native';
// hooks
import { useStore } from '~/hooks';
import { sunrise } from '~/constants';
import { observer } from 'mobx-react';
import { styles } from './styles';
import { InsetsView } from '~/components';

export const Dashboard: React.FC<any> = observer(() => {
  const {
    userStore: { userWeatherLocation, userWeatherCurrent },
  } = useStore();

  return (
    <ImageBackground
      source={sunrise}
      style={{
        flex: 1,
      }}
    >
      <InsetsView style={styles.mainContainer}>
        <ScrollView
          contentContainerStyle={styles.container}
          style={styles.scroll}
        >
          <Text style={styles.locationName}>{userWeatherLocation.name}</Text>
          <Text style={styles.locationTemperature}>
            {userWeatherCurrent.temp_c}&deg;
          </Text>
          <Text style={styles.locationCloud}>
            {userWeatherCurrent?.condition?.text}
          </Text>
        </ScrollView>
      </InsetsView>
    </ImageBackground>
  );
});
