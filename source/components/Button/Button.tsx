/** @format */
import React, { FC, memo } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextStyle,
} from 'react-native';
import { styles } from './styles';

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  textStyle?: TextStyle;
  onPress: () => void;
  style?: any;
}

export const Button: FC<ButtonProps> = memo(
  ({ text, onPress, style, textStyle }) => {
    return (
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={onPress}
        accessible
        accessibilityLabel={text}
      >
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
    );
  },
);
