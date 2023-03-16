/** @format */
import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// common
import { RootStackParamList } from '~/navigation/types';

export const useRootNavigation = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return useCallback(
    (route: RootStackParamList | any) => {
      return navigation.navigate(route);
    },
    [navigation],
  );
};
