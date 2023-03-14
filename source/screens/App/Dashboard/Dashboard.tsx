/** @format */
import React from 'react';
import { ScrollView, ImageBackground } from 'react-native';
// hooks
import { useStores } from '~/hooks';
import { sunrise } from '~/constants';
import { observer } from 'mobx-react';
import { styles } from './styles';
import { InsetsView, Shimmer } from '~/components';
import { MainInfo, Forecast } from './components';

export const Dashboard: React.FC = observer(() => {
  const {
    userStore: { userWeatherLocation, userWeatherCurrent, userWeatherLoading },
  } = useStores();

  return (
    <ImageBackground source={sunrise} style={styles.mainContainer}>
      <InsetsView style={styles.innerContainer}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.container}
        >
          {userWeatherLoading ? (
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
