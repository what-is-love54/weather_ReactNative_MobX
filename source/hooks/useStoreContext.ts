/** @format */
import { useContext } from 'react';
import { StoreContext } from '~/store';

export const useStores = () => {
  const context = useContext(StoreContext);

  if (context === null) {
    throw new Error(
      'You have forgotten to wrap your root component with RootStoreProvider',
    );
  }
  return context;
};
