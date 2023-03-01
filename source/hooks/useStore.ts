/** @format */
import { settingsStore, userStore } from '~/store';

export const useStore = () => {
  return {
    userStore,
    settingsStore,
  };
};
