/** @format */

import React from 'react';
import { Text, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// hooks
import { useStores, useTranslation } from '~/hooks';
import {
  // wind_grass,
  // cloudy,
  // flash,
  // snow,
  // sunset,
  sunrise,
  // windy,
} from '~/constants';
import { observer } from 'mobx-react';

export const Dashboard: React.FC<any> = observer(() => {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  const { userStore } = useStores();

  console.log('=-=-=-=-=', userStore.all);

  return (
    <ImageBackground
      source={sunrise}
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={[
          styles.scroll,
          {
            paddingTop: Math.max(insets.top),
            paddingBottom: Math.max(insets.bottom),
          },
        ]}
      >
        <Text>Hello world! It`s dashboard!</Text>
        <Text>{t('APP_NAME')}</Text>
      </ScrollView>
    </ImageBackground>
  );
});

const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
  scroll: {
    flex: 1,
  },
});
