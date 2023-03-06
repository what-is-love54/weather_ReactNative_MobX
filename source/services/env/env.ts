/** @format */

import Config from 'react-native-config';

import { getSync } from '~/utils';
import { ENV, envConfig, IEnvConfig, ASYNC_KEYS } from '~/constants';
import SettingsStore from '~/store/settings/settingsStore';

class Env {
  constructor() {
    this._envConfig = this.getAppConfig();
  }

  private _envConfig: IEnvConfig;

  async init() {
    try {
      const { env } =
        getSync(ASYNC_KEYS.SETTINGS) || SettingsStore.DEFAULT_SETTINGS;

      if (Config.APP_ENV === ENV.PROD) {
        this._envConfig = this.getAppConfig(Config.APP_ENV);
      } else if (env) {
        this._envConfig = this.getAppConfig(env);
      }
    } catch (err) {
      __DEV__ && console.log('Init Env Service error --------', err);
    }
  }

  private getAppConfig(env?: ENV): IEnvConfig {
    if (!env) {
      return envConfig[Config.APP_ENV as ENV];
    }

    return envConfig[env];
  }

  get envConfig(): IEnvConfig {
    return this._envConfig;
  }

  get mainApiUrl() {
    return this._envConfig.API_URL;
  }
}

export const envService = new Env();
