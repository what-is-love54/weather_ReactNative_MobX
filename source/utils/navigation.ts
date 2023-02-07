/** @format */
import { createNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from '~/navigation/types';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function rootNavigate(name: any, params?: any): void {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
