/** @format */

/** @format */

import { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';

import { envService } from '~/services';
import { initSyncStorage } from '~/utils';
import { userAPI } from '~/api';

export const useAppInit = () => {
  useEffect(() => {
    const init = async () => {
      try {
        await initSyncStorage();
        await envService.init();
        await userAPI.getWeather('London');
      } catch (err) {
        __DEV__ && console.warn('===--->> App Init Error <<---===', err);
      }
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true, duration: 1000 });
      __DEV__ && console.log('===--->> App Init Success <<---===');
    });
  }, []);
};
