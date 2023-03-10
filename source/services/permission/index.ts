/** @format */

import {
  check,
  request,
  PERMISSIONS,
  RESULTS,
  openSettings,
  checkLocationAccuracy,
  requestLocationAccuracy,
} from 'react-native-permissions';

type CheckLocationAccuracyParams = {
  onGranted?: () => void;
  onBlocked?: () => void;
  onDenied?: () => void;
};

type LocationAccuracyOptions = {
  purposeKey: string;
  onAuthorized?: () => void;
  onDenied?: () => void;
};

class PermissionsService {
  async handleNavigateToSettings() {
    try {
      await openSettings();
    } catch (err) {
      __DEV__ && console.warn('goToSettings error ----', err);
    }
  }

  async checkLocationAccuracy({
    onGranted,
    onBlocked,
    onDenied,
  }: CheckLocationAccuracyParams) {
    try {
      const accuracy = await checkLocationAccuracy();

      console.log('===------->> checkLocationAccuracy', accuracy);

      // switch (accuracy) {
      //   case RESULTS.GRANTED:
      //     onGranted?.();
      //     break;
      //   case RESULTS.BLOCKED:
      //     onBlocked?.();
      //     break;
      //   case RESULTS.DENIED:
      //     onDenied?.();
      //     break;
      //   default:
      //     break;
      // }

      return accuracy;
    } catch (err) {
      __DEV__ && console.warn('checkLocationAccuracy error ----', err);
    }
  }

  async requestLocationAccuracy({
    onDenied,
    onAuthorized,
    purposeKey,
  }: LocationAccuracyOptions) {
    try {
      const response = await requestLocationAccuracy({ purposeKey });

      console.log('===------>> requestLocationAccuracy', response);
      // const enabled = response.status === RESULTS.GRANTED;

      // if (enabled) {
      //   onAuthorized?.();
      //   return;
      // }
      //
      // onDenied?.();
    } catch (err) {
      __DEV__ && console.warn('requestLocationAccuracy error ----', err);
    }
  }
}

export const permissionsService = new PermissionsService();
