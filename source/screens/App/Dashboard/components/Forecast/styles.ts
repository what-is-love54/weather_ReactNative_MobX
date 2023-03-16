/** @format */

import { StyleSheet } from 'react-native';
// common
import { colors } from '~/constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    width: '100%',
    backgroundColor: colors._white_rgb,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  innerContainer: {
    paddingVertical: 20,
    color: colors._black,
  },
});
