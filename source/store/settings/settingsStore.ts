/** @format */
import { makeAutoObservable } from 'mobx';

class SettingsStore {
  DEFAULT_SETTINGS = {
    isFirstRun: true,
    env: null,
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export const settingsStore = new SettingsStore();
