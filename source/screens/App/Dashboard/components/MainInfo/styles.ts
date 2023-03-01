/** @format */

import { StyleSheet } from 'react-native';
import { colors } from '~/constants';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  locationName: {
    fontSize: 40,
    color: colors._white,
  },
  locationTemperature: {
    fontSize: 80,
    fontWeight: '100',
    color: colors._white,
  },
  locationCloud: {
    fontSize: 20,
    color: colors._white,
  },
});
