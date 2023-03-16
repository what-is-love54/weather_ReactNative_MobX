/** @format */

import { StyleSheet } from 'react-native';
// common
import { colors } from '~/constants';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: colors._646390,
  },
  centerContainer: {},
  bottomContainer: {
    width: '100%',
    alignSelf: 'center',
  },
  configText: {
    marginTop: 20,
    textAlign: 'center',
  },
});
