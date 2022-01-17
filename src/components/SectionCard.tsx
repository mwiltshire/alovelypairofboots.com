import * as React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Flower3 } from '../components/Flower3';
import { Flower4 } from '../components/Flower4';

interface SectionCardProps {
  children: React.ReactNode;
}

const cardVariants = {
  offscreen: {
    opacity: 0,
    rotate: -1
  },
  onscreen: {
    opacity: 1,
    rotate: 0,
    transition: {
      // type: 'spring',
      // bounce: 0.25,
      duration: 0.5,
      delay: 0.15
    }
  }
};

export function SectionCard({ children }: SectionCardProps) {
  return (
    <motion.div
      className="w-full"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false }}
    >
      <Card>
        <div className="absolute hidden md:block h-28 top-[-54px] left-[-59px]">
          <Flower3 />
        </div>
        <div className="absolute hidden md:block h-28 bottom-[-61px] right-[-51px]">
          <Flower4 />
        </div>
        {children}
      </Card>
    </motion.div>
  );
}
