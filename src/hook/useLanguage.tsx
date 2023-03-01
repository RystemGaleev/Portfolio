import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState();

  const { i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return [];
};
