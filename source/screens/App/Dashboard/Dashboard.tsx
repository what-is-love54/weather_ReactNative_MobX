/** @format */

import React, { useState, useEffect } from 'react';
import { Text, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// hooks
import { useTranslation, useAppContext } from '~/hooks';
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
  const { api } = useAppContext();
  const [loading, setLoading] = useState(false);

  const load = async () => {
    try {
      setLoading(true);
      await api.user.getWeather('London');
    } finally {
      setLoading(false);
    }
  };

  //
  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return <Text>loading...</Text>;
  }

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
