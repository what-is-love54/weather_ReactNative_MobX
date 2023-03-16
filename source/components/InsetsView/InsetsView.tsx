/** @format */

import React, { FC, memo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
  style: StyleProp<ViewStyle>;
  disableTopInset?: boolean;
  disableBottomInset?: boolean;
  isTabBarAbsolute?: boolean;
};

export const InsetsView: FC<Props> = memo(
  ({
    children,
    style,
    disableTopInset,
    disableBottomInset,
    isTabBarAbsolute = false,
  }) => {
    const insets = useSafeAreaInsets();
    const bottom = isTabBarAbsolute ? insets.bottom + 80 : insets.bottom;

    return (
      <View
        style={[
          style,
          {
            paddingTop: disableTopInset ? undefined : insets.top,
            paddingBottom: disableBottomInset ? undefined : bottom,
          },
        ]}
      >
        {children}
      </View>
    );
  },
);
