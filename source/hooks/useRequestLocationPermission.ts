/** @format */

import { useCallback, useEffect, useState } from 'react';
import { permissionsService } from '~/services';
import { permissionLocation, RootStack } from '~/constants';
import { useCheckLocationPermission } from '~/hooks/useCheckLocationPermission';
import { useRootNavigation } from '~/hooks/useRootNavigation';

export const useRequestLocationPermission = () => {
  const navigation = useRootNavigation();
  const [requestPermissionLoading, setRequestPermissionLoading] =
    useState(false);
  const {
    loading: checkLocationPermissionsLoading,
    blocked: locationPermissionsBlocked,
    denied: locationPermissionsDenied,
    granted: locationPermissionGranted,
  } = useCheckLocationPermission();

  const handleLoadingNavigate = useCallback(() => {
    navigation(RootStack.LOADING);
  }, [navigation]);

  const handleLocationPermission = useCallback(() => {
    setRequestPermissionLoading(true);
    permissionsService.requestPermission({
      type: permissionLocation,
      onGranted: () => {
        setRequestPermissionLoading(false);
      },
      onDenied: () => {
        handleLoadingNavigate();
        setRequestPermissionLoading(false);
      },
      onBlocked: () => {
        handleLoadingNavigate();
        setRequestPermissionLoading(false);
      },
    });
  }, []);

  useEffect(() => {
    handleLocationPermission();
  }, []);

  return { requestPermissionLoading, checkLocationPermissionsLoading };
};
