import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { motion, useAnimation } from 'framer-motion';
import { MotionH2 } from './motion-h2';
import { Section } from './section';
import { ContactForm } from './contact-form';
import { useAnimateInView } from '../use-animate-in-view';
import { scrollTo } from '../scroll-to';
import { Theme } from '../theme';

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

export const RSVP = () => {
  const theme = useTheme<Theme>();
  const animation = useAnimation();
  const [ref] = useAnimateInView(() => animation.start('visible'), {
    threshold: 0.1
  });
  return (
    <Section
      id="rsvp"
      styles={css(
        'background-color: #D2C5BD; margin: -2vmin; box-shadow: inset 0px 0px 0 2vmin #f3f2f1;'
      )}
    >
      <motion.div
        ref={ref}
        animate={animation}
        variants={wrapperVariants}
        initial="hidden"
      >
        <MotionH2 variants={headerVariants}>RSVP</MotionH2>
        <ContactForm onSuccess={() => {}} onError={() => {}} />
      </motion.div>
      <div
        css={css`
          position: absolute;
          right: 0;
          bottom: 0;
          padding: 1rem;
          margin: 2vmin;
        `}
      >
        <button
          css={css`
            text-transform: uppercase;
            background: none;
            outline: none;
            border: none;
            cursor: pointer;
            font-size: ${theme.fontSizes.xs};
            letter-spacing: 0.1rem;
          `}
          aria-label="Click to scroll back to the top of the page"
          onClick={e => {
            e.preventDefault();
            scrollTo();
          }}
        >
          Back to top ↑
        </button>
      </div>
    </Section>
  );
};
