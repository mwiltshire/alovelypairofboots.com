import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { motion, useAnimation } from 'framer-motion';
import { Theme } from '../theme';
import { Section } from './section';
import { MotionH2 } from './motion-h2';
import { useAnimateInView } from '../use-animate-in-view';

const wrapperVariants = {
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.02 }
  },
  hidden: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const headerVariants = {
  visible: {
    y: 0,
    rotateX: '0deg',
    transition: { duration: 1 }
  },
  hidden: {
    y: 50,
    rotateX: '90deg'
  }
};

const timeVariants = {
  visible: {
    opacity: 1,
    y: 0,
    rotateX: '0deg',
    transition: { duration: 1 }
  },
  hidden: {
    opacitiy: 0,
    y: 50,
    rotateX: '90deg'
  }
};

interface TimeProps {
  theme: Theme;
}

const Time = styled.h3<TimeProps>`
  margin-bottom: 0.2rem;
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const Timetable = () => {
  const theme = useTheme<Theme>();
  const animation = useAnimation();
  const [ref] = useAnimateInView(() => animation.start('visible'), {
    threshold: 0.1
  });
  return (
    <Section id="timetable" styles={css('text-align: center;')}>
      <motion.div
        ref={ref}
        animate={animation}
        variants={wrapperVariants}
        initial="hidden"
      >
        <MotionH2 variants={headerVariants}>Timetable</MotionH2>
        <motion.div variants={timeVariants}>
          <Time>2:00 pm</Time>
          <p>Ceremony</p>
        </motion.div>
        <motion.div variants={timeVariants}>
          <Time>2:45 pm</Time>
          <p>Drinks and canapés</p>
        </motion.div>
        <motion.div variants={timeVariants}>
          <Time>4:30 pm</Time>
          <p>Wedding breakfast</p>
        </motion.div>
        <motion.div variants={timeVariants}>
          <Time>6:00pm</Time>
          <p>Speeches</p>
        </motion.div>
        <motion.div variants={timeVariants}>
          <Time>7:00 pm</Time>
          <p>Cutting of the cake and first dance</p>
        </motion.div>
        <motion.div variants={timeVariants}>
          <Time>9:00 pm</Time>
          <p>Evening food</p>
        </motion.div>
        <motion.div variants={timeVariants}>
          <Time>12:00 am</Time>
          <p>Carriages/afterparty</p>
        </motion.div>
      </motion.div>
    </Section>
  );
};
