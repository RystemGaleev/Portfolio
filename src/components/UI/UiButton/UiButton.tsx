import { FC } from 'react';
import './UiButton.scss';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { AnimationOpacity } from '../../../Animation/Animation';

interface ButtonProps {
  children: React.ReactNode;
  variant: string;
  size: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const UiButton: FC<ButtonProps> = ({
  children,
  variant,
  size,
  onClick,
  ...props
}) => {
  return (
    <motion.button
      variants={AnimationOpacity}
      onClick={onClick}
      {...props}
      className={clsx('btn', {
        [`btn-${variant} btn-${size}`]: true,
      })}
    >
      {children}
    </motion.button>
  );
};
