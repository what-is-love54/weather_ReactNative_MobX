/** @format */

import { useTranslation as useI18nTranslation } from 'react-i18next';

export const useTranslation = (...props: string[]) => {
  const { t, i18n } = useI18nTranslation(...props);

  return { t, i18n };
};
