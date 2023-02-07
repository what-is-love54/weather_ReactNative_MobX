/** @format */
import { LanguageDetectorAsyncModule } from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';

const STORE_LANGUAGE_KEY = 'settings.lang';
const locales = RNLocalize.getLocales()[0].languageCode;

const detectPhoneLang = async (callback: (lang: string) => void) => {
  try {
    await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then(language => {
      if (language) {
        return callback(language);
      } else {
        return callback(locales);
      }
    });
  } catch (error) {
    console.log('Error reading language', error);
  }
};

export const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => {
    if (__DEV__) {
      console.log('init language detector');
    }
  },
  detect: callback => {
    detectPhoneLang(callback);
  },
  cacheUserLanguage: async (language: string) => {
    try {
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch (error) {
      if (__DEV__) {
        console.log('error language detector', error);
      }
    }
  },
};
