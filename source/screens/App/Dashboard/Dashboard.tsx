/** @format */
import React, { useEffect } from 'react';
import { ScrollView, ImageBackground } from 'react-native';
// hooks
import { useStores } from '~/hooks';
import { permissionLocation, sunrise } from '~/constants';
import { observer } from 'mobx-react';
import { styles } from './styles';
import { InsetsView } from '~/components';
import { MainInfo, Forecast } from './components';
import { permissionsService } from '~/services';

export const Dashboard: React.FC = observer(() => {
  const {
    userStore: { userWeatherLocation, userWeatherCurrent },
  } = useStores();

  useEffect(() => {
    permissionsService.requestPermission({ type: permissionLocation });
  }, []);

  return (
    <ImageBackground source={sunrise} style={styles.mainContainer}>
      <InsetsView style={styles.innerContainer}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.container}
        >
          <MainInfo
            city={userWeatherLocation.name}
            temperature={userWeatherCurrent.temp_c}
            condition={userWeatherCurrent?.condition?.text}
          />
          <Forecast />
        </ScrollView>
      </InsetsView>
    </ImageBackground>
  );
});
