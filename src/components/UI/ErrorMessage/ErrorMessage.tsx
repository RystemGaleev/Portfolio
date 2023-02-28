import { useNavigate } from 'react-router-dom';
import { UiButton } from '../UiButton/UiButton';
import style from './ErrorMessage.module.scss';

export const ErrorMessage = () => {
  const navigate = useNavigate();

  return (
    <div className={style.error}>
      <p className={style.error_message}>
        Something went wrong! <br /> Try again later
      </p>
      <UiButton onClick={() => navigate('/')} size="sm" variant="primary">
        Go home
      </UiButton>
    </div>
  );
};
