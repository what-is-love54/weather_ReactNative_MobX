/** @format */

import { PERMISSIONS } from 'react-native-permissions';
import { IS_IOS } from '~/constants/device';

export const permissionLocation = IS_IOS
  ? PERMISSIONS.IOS.LOCATION_ALWAYS
  : PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION;
