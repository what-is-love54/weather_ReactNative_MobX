/** @format */

import { useEffect, useState, useCallback } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { useCheckLocationPermission } from '~/hooks/useCheckLocationPermission';

export const useGeolocation = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const { granted: locationPermissionGranted } = useCheckLocationPermission();

  const getLocations = useCallback(() => {
    Geolocation.getCurrentPosition(info => {
      setLatitude(info.coords.latitude);
      setLongitude(info.coords.longitude);
    });
  }, [locationPermissionGranted]);

  useEffect(() => {
    getLocations();
  }, [locationPermissionGranted]);

  return {
    latitude,
    longitude,
  };
};
