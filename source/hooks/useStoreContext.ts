/** @format */
import React, { useContext } from 'react';
import { ApiService } from '~/services';
import { AppStore } from '~/store';

interface AppContextType {
  store: AppStore;
  api: ApiService;
}

export const AppContext = React.createContext<null | AppContextType>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context as AppContextType;
};
