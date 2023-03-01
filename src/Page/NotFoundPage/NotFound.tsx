import { useTranslation } from 'react-i18next';
import './NotFound.scss';
import { Layout } from '../../Layout/Layout';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="notFound">
        <div className="container">
          <div className="notFound__wrapper">
            <div className="notFound__title">
              <div className="notFound__error">404</div>
              <div className="notFound__descr">{t(`notFound.descr`)}</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
