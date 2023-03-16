/** @format */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { merge } from 'lodash';

let syncData = new Map();

export const deviceStorage = {
  async saveItem(key: any, value: any) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error: any) {
      console.log('AsyncStorage SET Error: ' + error.message);
    }
  },
  async getItem(key: any) {
    let item = null;

    try {
      item = await AsyncStorage.getItem(key);
    } catch (error: any) {
      console.log('AsyncStorage GET Error: ' + error.message);
      item = null;
    }

    return item;
  },
  async removeItem(key: any) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error: any) {
      console.log('AsyncStorage REMOVE Error: ' + error.message);
    }
  },
};

export async function initSyncStorage() {
  syncData = new Map();
  const saveItem = (item: any[]) => {
    let value;

    try {
      value = JSON.parse(item[1]);
    } catch (e) {
      [, value] = item;
    }
    syncData.set(item[0], value);
  };

  try {
    const keys = await AsyncStorage.getAllKeys();
    const keyValuePairs = await AsyncStorage.multiGet(keys);

    keyValuePairs.forEach(saveItem);
  } catch (error) {
    console.error('Sync Storage init error!', error);
  }
}

export function getSync(key: any) {
  return syncData.get(key);
}

export function clearSyncStorage() {
  syncData = new Map();
  return AsyncStorage.clear();
}

export function storeSync(key: any, value: any) {
  if (!key) {
    return null;
  }

  syncData.set(key, value);
  return deviceStorage.saveItem(key, JSON.stringify(value));
}

export function mergeSync(key: string, value: string) {
  if (!key) {
    return null;
  }
  const currentValue = getSync(key) || {};

  return storeSync(key, merge(currentValue, value));
}

export function removeSync(key: string) {
  if (!key) {
    return null;
  }

  syncData.delete(key);
  return deviceStorage.removeItem(key);
}
