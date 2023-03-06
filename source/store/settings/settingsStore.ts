/** @format */
import { makeAutoObservable } from 'mobx';

export default class SettingsStore {
  static DEFAULT_SETTINGS = {
    isFirstRun: true,
    env: null,
  };

  constructor() {
    makeAutoObservable(this);
  }
}
