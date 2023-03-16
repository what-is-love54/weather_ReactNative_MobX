/** @format */

import { useCallback, useEffect, useState } from 'react';
// common
import { permissionsService } from '~/services';
import { permissionLocation, RootStack } from '~/constants';
import { useRootNavigation } from '~/hooks/useRootNavigation';
import { useGeolocation } from '~/hooks/useGeolocation';
import { useStores } from '~/hooks/useStore';

export const useRequestLocationPermission = () => {
  const [requestPermissionLoading, setRequestPermissionLoading] =
    useState(false);
  const { latitude, longitude } = useGeolocation();
  const navigation = useRootNavigation();
  const { userStore } = useStores();

  const handleLoadingNavigate = useCallback(() => {
    navigation(RootStack.LOADING);
  }, [navigation]);

  const handleLoadWeather = useCallback(() => {
    userStore.loadWeather(`${latitude},${longitude}`);
  }, [latitude, longitude]);

  const handleLocationPermission = useCallback(() => {
    setRequestPermissionLoading(true);
    permissionsService
      .requestPermission({
        type: permissionLocation,
        onGranted: () => {
          handleLoadWeather();
        },
        onDenied: () => {
          handleLoadingNavigate();
        },
        onBlocked: () => {
          handleLoadingNavigate();
        },
      })
      .finally(() => {
        setRequestPermissionLoading(false);
      });
  }, []);

  useEffect(() => {
    handleLocationPermission();
  }, []);

  return {
    requestPermissionLoading,
  };
};
