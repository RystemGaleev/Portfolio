import { IMyWorks } from '../../types';
import { FC } from 'react';
import style from './MyWork.module.scss';
import { useTranslation } from 'react-i18next';

interface IMyWorksProps extends IMyWorks {
  index: number;
}

export const MyWork: FC<IMyWorksProps> = ({ title, subtitle, dutiesList, stack, index, date }) => {
  const { t } = useTranslation();

  return (
    <div className={index % 2 !== 0 ? `${style.wrapper} ${style.reverse}` : `${style.wrapper}`}>
      <div className={style.work}>
        <div className={style.title}>{title}</div>

        <ul className={style.dutiesList}>
          <span>{t('experience.responsibilities')}</span>
          {dutiesList?.map((dutie) => (
            <li key={dutie} className={style.dutie}>
              {dutie}
            </li>
          ))}
        </ul>
        <div className={style.stack}>
          <span>{t('experience.stack')}</span> {stack}
        </div>
      </div>
      <div className={index % 2 !== 0 ? `${style.block} ${style.reverse}` : `${style.block}`}>
        <div className={style.date}>{date}</div>
        <div className={style.subtitle}>{subtitle} </div>
      </div>
    </div>
  );
};
