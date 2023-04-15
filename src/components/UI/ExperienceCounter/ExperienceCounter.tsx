import { useState, useEffect } from 'react';
import style from './ExperienceCounter.module.scss';
import moment from 'moment';
import pluralize from 'plural-ru';
import { useTranslation } from 'react-i18next';

export const ExperienceCounter = () => {
  const { t } = useTranslation();

  const [startDate] = useState(moment([2021, 2, 10]));
  const [currentDate, setCurrentDate] = useState(moment());
  const [experience, setExperience] = useState({
    yearsString: '',
    monthsString: '',
    weeksString: '',
    daysString: '',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(moment());
    }, 86400000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const diffInDays = currentDate.diff(startDate, 'days');
    const years = Math.floor(diffInDays / 365);
    const months = Math.floor((diffInDays - years * 365) / 30);
    const weeks = Math.floor((diffInDays - years * 365 - months * 30) / 7);
    const days = diffInDays - years * 365 - months * 30 - weeks * 7;

    const yearsString = pluralize(years, t('roadmap.years.years1'), t('roadmap.years.years2'), t('roadmap.years.years3'));
    const monthsString = pluralize(months, t('roadmap.months.months1'), t('roadmap.months.months2'), t('roadmap.months.months3'));
    const weeksString = pluralize(weeks, t('roadmap.weeks.weeks1'), t('roadmap.weeks.weeks2'), t('roadmap.weeks.weeks3'));
    const daysString = pluralize(days, t('roadmap.days.days1'), t('roadmap.days.days2'), t('roadmap.days.days3'));
    setExperience({ yearsString, monthsString, weeksString, daysString });
  }, [currentDate, startDate, t]);

  return (
    <div className={style.experienceBlock}>
      <div className={style.experience}>{experience.yearsString}</div>
      <div className={style.experience}>{experience.monthsString}</div>
      <div className={style.experience}>{experience.weeksString}</div>
      <div className={style.experience}>{experience.daysString}</div>
    </div>
  );
};
