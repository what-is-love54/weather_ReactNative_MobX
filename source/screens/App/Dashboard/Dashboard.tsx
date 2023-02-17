/** @format */

import React, { memo, useEffect } from 'react';
import { Text, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// hooks
import { useTranslation } from '~/hooks';
import { wind_grass } from '~/constants';
import { api } from '~/services';

export const Dashboard: React.FC<any> = memo(() => {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();
  // const [data, setData] = useState({});

  // const getTransaction = async () => {
  //   return await api('get', { q: 'London', dt: '2022-12-25' });
  // };

  function* getTransaction() {
    try {
      const response: object = yield api('get', {
        q: 'London',
        dt: '2022-12-25',
      });

      console.log('res after getTransaction', response);
    } catch (err) {
      console.log('error after getTransaction', err);
    }
  }

  useEffect(() => {
    getTransaction();
  }, []);

  return (
    <ImageBackground
      source={wind_grass}
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={[
          styles.scroll,
          {
            paddingTop: Math.max(insets.top),
            paddingBottom: Math.max(insets.bottom),
          },
        ]}
      >
        <Text>Hello world! It`s dashboard!</Text>
        <Text>{t('APP_NAME')}</Text>
      </ScrollView>
    </ImageBackground>
  );
});

const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
  scroll: {
    flex: 1,
  },
});
