/** @format */

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
  scroll: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  locationName: {
    fontSize: 40,
  },
  locationTemperature: {
    fontSize: 80,
    fontWeight: '100',
  },
  locationCloud: {
    fontSize: 20,
  },
});
