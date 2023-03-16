/** @format */

import React, { memo, useCallback } from 'react';
import { View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
// common
import { Button } from '~/components';
import { permissionsService } from '~/services';
import { RootStack } from '~/constants';
import { useRootNavigation } from '~/hooks';
// inner
import { styles } from './styles';

export const Loading: React.FC<any> = memo(() => {
  const navigation = useRootNavigation();

  const handleDashboardNavigate = useCallback(() => {
    navigation(RootStack.APP);
  }, [navigation]);

  const handleSettingsNavigate = useCallback(() => {
    permissionsService.handleNavigateToSettings();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
      <View style={styles.permissionText}>
        <Text>Need to add location permission</Text>
      </View>
      <View style={styles.permissionButton}>
        <Button onPress={handleSettingsNavigate} text={'Go to Settings'} />
      </View>
      <View style={styles.settingsButton}>
        <TouchableOpacity onPress={handleDashboardNavigate}>
          <Text>Go to dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
