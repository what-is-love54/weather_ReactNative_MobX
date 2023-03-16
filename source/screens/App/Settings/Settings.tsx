/** @format */

import React, { memo, useCallback } from 'react';
import {
  Text,
  View,
  Button,
  I18nManager,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RNRestart from 'react-native-restart';
// common
import { useTranslation } from '~/hooks';
import { envService } from '~/services';
import { colors } from '~/constants';

export const Settings: React.FC<any> = memo(() => {
  const insets = useSafeAreaInsets();
  const { i18n } = useTranslation();

  const handlePressChangeLanguage = useCallback(() => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar').then(() => {
      I18nManager.forceRTL(i18n.language === 'ar');
      RNRestart.Restart();
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors._AABDC6,
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
        <Text>Hello world! It`s Settings!</Text>
        <Text>{envService.envConfig.APP_ENV}</Text>
        <Button title="Change to Arabic" onPress={handlePressChangeLanguage} />
      </ScrollView>
    </View>
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
