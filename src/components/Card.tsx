import * as React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <motion.div
      layout
      className="relative py-8 px-6 md:px-12 w-full bg-white border-solid-black shadow-card"
    >
      {children}
    </motion.div>
  );
}
