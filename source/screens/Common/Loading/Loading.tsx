/** @format */

import React, { memo, useCallback } from 'react';
import { View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { Button } from '~/components';
import { permissionsService } from '~/services';
import { permissionLocation, RootStack } from '~/constants';
import { useRootNavigation } from '~/hooks/useRootNavigation';

export const Loading: React.FC<any> = memo(() => {
  const navigation = useRootNavigation();

  const handleDashboardNavigate = useCallback(() => {
    navigation(RootStack.App);
  }, [navigation]);

  const goToSettings = useCallback(() => {
    permissionsService.handleNavigateToSettings();
  }, []);

  const handleLocationPermission = useCallback(() => {
    permissionsService.requestPermission({
      type: permissionLocation,
      onGranted: () => {
        handleDashboardNavigate();
      },
      onBlocked: () => {
        goToSettings();
        handleDashboardNavigate();
      },
      onDenied: () => {
        goToSettings();
        handleDashboardNavigate();
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
      <View style={styles.permissionText}>
        <Text>Need to add location permission</Text>
      </View>
      <View style={styles.permissionButton}>
        <Button
          onPress={handleLocationPermission}
          text={'Confirm permission'}
        />
      </View>
      <View style={styles.settingsButton}>
        <TouchableOpacity onPress={goToSettings}>
          <Text>Go to Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
