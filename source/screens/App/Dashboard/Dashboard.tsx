/** @format */

import React from 'react';
import { Text, ScrollView, ImageBackground } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// hooks
import { useStore } from '~/hooks';
import { sunrise } from '~/constants';
import { observer } from 'mobx-react';
import { styles } from './styles';

export const Dashboard: React.FC<any> = observer(() => {
  const insets = useSafeAreaInsets();

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
      <ScrollView
        contentContainerStyle={styles.container}
        style={[
          styles.scroll,
          {
            paddingTop: Math.max(insets.top),
            paddingBottom: Math.max(insets.bottom),
          },
        ]}
      >
        <Text style={styles.locationName}>{userWeatherLocation.name}</Text>
        <Text style={styles.locationTemperature}>
          {userWeatherCurrent.temp_c}&deg;
        </Text>
        <Text style={styles.locationCloud}>
          {userWeatherCurrent?.condition?.text}
        </Text>
      </ScrollView>
    </ImageBackground>
  );
});
