/** @format */

import React, { memo, useCallback } from 'react';
import { Text, View, I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';
// common
import { useTranslation } from '~/hooks';
import { envService } from '~/services';
import { Button, InsetsView } from '~/components';
// inner
import { styles } from './styles';

export const Settings: React.FC<any> = memo(() => {
  const { i18n } = useTranslation();

  const handlePressChangeLanguage = useCallback(() => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar').then(() => {
      I18nManager.forceRTL(i18n.language === 'ar');
      RNRestart.Restart();
    });
  }, []);

  return (
    <InsetsView style={styles.innerContainer} isTabBarAbsolute>
      <View style={styles.mainContainer}>
        <View style={styles.centerContainer}>
          <Text style={styles.configText}>
            Configuration: {envService.envConfig.APP_ENV}
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <Button text="Change to Arabic" onPress={handlePressChangeLanguage} />
        </View>
      </View>
    </InsetsView>
  );
});
