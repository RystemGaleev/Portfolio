import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { motion } from 'framer-motion';

import style from './Folder.module.scss';
import { forwardRef } from 'react';
interface IFolderProps {
  icon: React.ReactNode;
  label: string;
  rotate?: boolean;
  arrow: boolean;
}

export const Folder = forwardRef<HTMLDivElement, IFolderProps>(
  ({ icon, label, rotate, arrow }, forwardRef) => {
    return (
      <motion.div ref={forwardRef} className={style.folder}>
        {arrow && (
          <MdOutlineKeyboardArrowDown
            className={
              rotate
                ? `${style.icon_arrow}`
                : `${style.icon_arrow} ${style.rotate}`
            }
            size={24}
          />
        )}
        {icon}
        {label}
      </motion.div>
    );
  },
);
export const MFolder = motion(Folder);
