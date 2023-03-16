/** @format */

import React, { FC, memo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
  style: StyleProp<ViewStyle>;
  disableTopInset?: boolean;
  disableBottomInset?: boolean;
};

export const InsetsView: FC<Props> = memo(
  ({ children, style, disableTopInset, disableBottomInset }) => {
    const insets = useSafeAreaInsets();

    return (
      <View
        style={[
          style,
          {
            paddingTop: disableTopInset ? undefined : insets.top,
            paddingBottom: disableBottomInset ? undefined : insets.bottom,
          },
        ]}
      >
        {children}
      </View>
    );
  },
);
