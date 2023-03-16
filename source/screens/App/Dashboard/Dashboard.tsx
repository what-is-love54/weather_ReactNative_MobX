/** @format */
import React from 'react';
import { ScrollView, ImageBackground } from 'react-native';
import { observer } from 'mobx-react';
// common
import {
  useCheckLocationPermission,
  useRequestLocationPermission,
  useStores,
} from '~/hooks';
import { sunrise } from '~/constants';
import { InsetsView, Shimmer } from '~/components';
// inner
import { MainInfo, Forecast } from './components';
import { styles } from './styles';

export const Dashboard: React.FC = observer(() => {
  const {
    userStore: { userWeatherLocation, userWeatherCurrent, userWeatherLoading },
  } = useStores();
  const { loading: checkLocationPermissionsLoading } =
    useCheckLocationPermission();
  const { requestPermissionLoading } = useRequestLocationPermission();

  const isWeatherLoading =
    requestPermissionLoading ||
    userWeatherLoading ||
    checkLocationPermissionsLoading;

  return (
    <ImageBackground source={sunrise} style={styles.mainContainer}>
      <InsetsView style={styles.innerContainer}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.container}
        >
          {isWeatherLoading ? (
            <Shimmer />
          ) : (
            <>
              <MainInfo
                city={userWeatherLocation.name}
                temperature={userWeatherCurrent.temp_c}
                condition={userWeatherCurrent?.condition?.text}
              />
              <Forecast />
            </>
          )}
        </ScrollView>
      </InsetsView>
    </ImageBackground>
  );
});
