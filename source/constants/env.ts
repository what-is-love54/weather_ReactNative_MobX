/** @format */

import Config from 'react-native-config';

export enum ENV {
  DEV = 'dev',
  PROD = 'prod',
}

export interface IEnvConfig {
  API_URL: string | undefined;
  APP_ENV: ENV;
}

// console.log('===----->>>', Config.ENV);

export const envConfig: Record<ENV, IEnvConfig> = {
  dev: {
    API_URL: Config.API_DEV_URL,
    APP_ENV: ENV.DEV,
  },
  prod: {
    API_URL: Config.API_PROD_URL,
    APP_ENV: ENV.PROD,
  },
};
