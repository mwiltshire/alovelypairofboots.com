import * as React from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';

export function LoadingScreen() {
  return (
    <motion.div
      className="flex items-center justify-center w-screen h-screen px-4"
      key="loading"
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <Logo />
    </motion.div>
  );
}
