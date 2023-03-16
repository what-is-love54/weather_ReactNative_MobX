/** @format */

import { createContext } from 'react';
// stores
import UserStore from '~/store/user/userStore';
import SettingsStore from '~/store/settings/settingsStore';

interface Root {
  userStore: UserStore;
  settingsStore: SettingsStore;
}

export const userStore = new UserStore();
export const settingsStore = new SettingsStore();

export const Store = createContext<Root>({
  userStore,
  settingsStore,
});
