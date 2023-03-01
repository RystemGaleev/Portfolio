import { useTranslation } from 'react-i18next';
import style from './LanguageToggler.module.scss';

export const LanguageToggler = () => {
  const { i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };
  return (
    <div className={style.language_btns}>
      <button className={style.language} onClick={toggleLang}>
        {i18n.language === 'en' ? 'EN' : 'RU'}
      </button>
    </div>
  );
};
