/** @format */

import {
  check,
  request,
  RESULTS,
  openSettings,
  checkLocationAccuracy,
  requestLocationAccuracy,
} from 'react-native-permissions';
import {
  CheckPermission,
  LocationAccuracyOptions,
  RequestPermission,
} from '~/types';

class PermissionsService {
  async requestPermission({
    type,
  }: // onGranted,
  // onDenied,
  // onBlocked,
  RequestPermission) {
    try {
      const response = await request(type);

      console.log('=-=-=-=-=-=-=-=-=-', response);

      // switch (response) {
      //   case RESULTS.GRANTED:
      //     onGranted?.();
      //     break;
      //   case RESULTS.DENIED:
      //     onDenied?.();
      //     break;
      //   case RESULTS.BLOCKED:
      //     onBlocked?.();
      //     break;
      //   default:
      //     onDenied?.();
      //     break;
      // }
    } catch (err) {
      __DEV__ && console.warn('checkPermission error ----', err);
    }
  }

  async checkPermission({
    type,
    onGranted,
    onDenied,
    onBlocked,
  }: CheckPermission) {
    try {
      const response = await check(type);

      switch (response) {
        case RESULTS.GRANTED:
          onGranted?.();
          break;
        case RESULTS.DENIED:
          onDenied?.();
          break;
        case RESULTS.BLOCKED:
          onBlocked?.();
          break;
        default:
          onDenied?.();
          break;
      }
    } catch (err) {
      __DEV__ && console.warn('checkPermission error ----', err);
    }
  }

  async handleNavigateToSettings() {
    try {
      await openSettings();
    } catch (err) {
      __DEV__ && console.warn('goToSettings error ----', err);
    }
  }

  async checkLocationAccuracy() {
    try {
      const accuracy = await checkLocationAccuracy();

      console.log('===------->> checkLocationAccuracy', accuracy);

      return accuracy;
    } catch (err) {
      __DEV__ && console.warn('checkLocationAccuracy error ----', err);
    }
  }

  async requestLocationAccuracy({
    purposeKey = 'full',
  }: LocationAccuracyOptions) {
    try {
      const response = await requestLocationAccuracy({
        purposeKey: purposeKey,
      });

      console.log('===------>> requestLocationAccuracy', response);
    } catch (err) {
      __DEV__ && console.warn('requestLocationAccuracy error ----', err);
    }
  }
}

export const permissionsService = new PermissionsService();
