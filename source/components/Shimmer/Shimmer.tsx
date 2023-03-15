/** @format */

import React, { FC, memo } from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { styles } from './styles';
import { colors } from '~/constants';

export const Shimmer: FC = memo(() => {
  return (
    <View style={styles.container}>
      <SkeletonPlaceholder backgroundColor={colors._white_rgb}>
        <>
          <View style={styles.locationView} />
          <View style={styles.tempView} />
          <View style={styles.conditionView} />
          <View style={styles.forecastView} />
        </>
      </SkeletonPlaceholder>
    </View>
  );
});
