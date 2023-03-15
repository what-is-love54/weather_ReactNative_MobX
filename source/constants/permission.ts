/** @format */

import { PERMISSIONS } from 'react-native-permissions';
import { IS_IOS } from '~/constants/device';

export const permissionLocation = IS_IOS
  ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
  : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
