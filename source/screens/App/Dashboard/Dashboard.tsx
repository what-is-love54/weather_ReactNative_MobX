/** @format */

import React, { memo, useCallback } from 'react';
import { Text, View, Button, I18nManager } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RNRestart from 'react-native-restart';
import Config from 'react-native-config';
// hooks
import { useTranslation } from '~/hooks';

export const Dashboard: React.FC<any> = memo(() => {
  const insets = useSafeAreaInsets();
  const { t, i18n } = useTranslation();

  console.log(Config.API_DEV_URL);

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
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Math.max(insets.top),
        paddingBottom: Math.max(insets.bottom),
        backgroundColor: '#fff',
      }}
    >
      <Text>Hello world!</Text>
      <Text>{t('APP_NAME')}</Text>
      <Button title="Change to Arabic" onPress={handlePressChangeLanguage} />
    </View>
  );
});
