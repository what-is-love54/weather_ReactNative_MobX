/** @format */
import { useContext } from 'react';
// common
import { Store } from '~/store/rootStore';

export const useStores = () => {
  const context = useContext(Store);

  if (context === null) {
    throw new Error('Error with context');
  }

  return context;
};
