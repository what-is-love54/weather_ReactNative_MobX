/** @format */

import React, { memo } from 'react';
import { Text, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// hooks
import { useTranslation } from '~/hooks';

export const Dashboard: React.FC<any> = memo(() => {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <ImageBackground
      source={require('../../../assets/gif/giphy-downsized-large.gif')}
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
