import { FC, forwardRef } from 'react';
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

export const UiButton: FC<ButtonProps> = forwardRef(
  ({ children, variant, size, onClick, ...props }, ref: any) => {
    return (
      <motion.button
        variants={AnimationOpacity}
        onClick={onClick}
        ref={ref}
        {...props}
        className={clsx('btn', {
          [`btn-${variant} btn-${size}`]: true,
        })}
      >
        {children}
      </motion.button>
    );
  },
);
export const MButton = motion(UiButton);
