import React from 'react';
import { css } from '@emotion/core';
import { motion, useAnimation } from 'framer-motion';
import { Section } from './section';
import { MotionH2 } from './motion-h2';
import { useAnimateInView } from '../use-animate-in-view';
import { createGrid } from '../grid-helpers';

const { getGridContainerStyles, getGridItemStyles } = createGrid({
  spacing: '2vmin'
});

const wrapperVariants = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  hidden: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const headerVariants = {
  visible: {
    y: 0,
    opacity: 1,
    rotateX: '0deg',
    transition: { duration: 1 }
  },
  hidden: {
    y: 100,
    opacity: 0,
    rotateX: '90deg'
  }
};

const pVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 }
  },
  hidden: {
    y: 100,
    opacity: 0
  }
};

export const Info = () => {
  const animation = useAnimation();
  const [ref] = useAnimateInView(() => animation.start('visible'), {
    threshold: 0.1
  });
  return (
    <Section id="info">
      <motion.div
        ref={ref}
        animate={animation}
        variants={wrapperVariants}
        initial="hidden"
      >
        <MotionH2 variants={headerVariants}>Info</MotionH2>
        <div
          css={css`
            ${getGridContainerStyles()}
          `}
        >
          <div
            css={css`
              ${getGridItemStyles({ sizes: { xs: 12, md: 6 } })}
            `}
          >
            <motion.p variants={pVariants}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              vel sit provident facere a nemo neque quidem iste, soluta expedita
              tenetur exercitationem ratione aperiam iusto veritatis laborum
              nulla repellendus nobis ratione aperiam iusto veritatis laborum
              nulla repellendus nobis.
            </motion.p>
          </div>
          <div
            css={css`
              ${getGridItemStyles({ sizes: { xs: 12, md: 6 } })}
            `}
          >
            <motion.p variants={pVariants}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              vel sit provident facere a nemo neque quidem iste, soluta expedita
              tenetur exercitationem ratione aperiam iusto veritatis laborum
              nulla repellendus nobis.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
