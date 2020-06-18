import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { motion, useAnimation } from 'framer-motion';
import { Theme } from '../theme';
import Container from './container';
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
    <section
      css={css`
        display: flex;
        align-items: center;
        min-height: 100vh;
        padding: 4rem 0;
        text-align: center;
      `}
    >
      <Container constrain>
        <motion.div
          ref={ref}
          animate={animation}
          variants={wrapperVariants}
          initial="hidden"
        >
          <motion.h2
            variants={headerVariants}
            css={css`
              text-align: center;
              font-family: 'Great Vibes', serif;
              font-weight: 400;
              font-size: ${theme.fontSizes['4xl']};
              margin-bottom: 4rem;
            `}
          >
            Timetable
          </motion.h2>
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
      </Container>
    </section>
  );
};
