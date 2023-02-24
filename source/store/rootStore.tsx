/** @format */
import React, { createContext, ReactNode } from 'react';
import { SettingsStore, UserStore } from '~/store';

export class RootStore {
  userStore: UserStore;
  settingsStore: SettingsStore;

  constructor() {
    this.userStore = new UserStore();
    this.settingsStore = new SettingsStore();
  }
}

export const StoreContext = createContext<RootStore | null>(null);

export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
  const store = new RootStore();

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
