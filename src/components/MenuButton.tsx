import * as React from 'react';
import { motion } from 'framer-motion';

interface MenuButtonProps {
  onClick: () => void;
}

export function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      className="flex items-center cursor-pointer z-30 font-handwritten font-bold md:hidden"
      onClick={onClick}
    >
      Menu
    </motion.button>
  );
}
