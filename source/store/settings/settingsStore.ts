/** @format */
import { makeAutoObservable } from 'mobx';

export class SettingsStore {
  DEFAULT_SETTINGS = {
    isFirstRun: true,
    env: null,
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export const settingsStore = new SettingsStore();
