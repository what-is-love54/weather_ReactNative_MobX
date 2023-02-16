/** @format */

/** @format */

import { useEffect, useState } from 'react';
import RNBootSplash from 'react-native-bootsplash';

import { envService } from '~/services';
import { initSyncStorage } from '~/utils';

export const useAppInit = () => {
  const [isInitLoading, setIsInitLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      setIsInitLoading(true);
      try {
        await initSyncStorage();
        await envService.init();
      } catch (err) {
        __DEV__ && console.warn('===--->> App Init Error <<---===', err);
      }
    };

    init().finally(async () => {
      setIsInitLoading(false);
      await RNBootSplash.hide({ fade: true, duration: 1000 });
      __DEV__ && console.log('===--->> App Init Success <<---===');
    });
  }, []);

  return { isInitLoading };
};
