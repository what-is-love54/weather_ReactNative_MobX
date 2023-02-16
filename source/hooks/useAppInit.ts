/** @format */

import { useEffect, useState } from 'react';
import RNBootSplash from 'react-native-bootsplash';

import { envService } from '~/services';
import { initSyncStorage } from '~/utils';

export const useAppInit = () => {
  const [isInitLoading, setIsInitLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        await initSyncStorage();
        await envService.init();
      } catch (err) {
        __DEV__ && console.warn('===--->> APP Init Error <<---===', err);
      } finally {
        setIsInitLoading(false);
        await RNBootSplash.hide({ fade: false, duration: 200 });
      }
    })();
  }, []);

  return {
    isInitLoading,
  };
};
