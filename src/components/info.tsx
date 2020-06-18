import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { motion, useAnimation } from 'framer-motion';
import { Theme } from '../theme';
import Container from './container';
import { useAnimateInView } from '../use-animate-in-view';
import { createGrid } from '../grid-helpers';

const { getGridContainerStyles, getGridItemStyles } = createGrid({
  spacing: 15
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
            Info
          </motion.h2>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae vel sit provident facere a nemo neque quidem iste,
                soluta expedita tenetur exercitationem ratione aperiam iusto
                veritatis laborum nulla repellendus nobis ratione aperiam iusto
                veritatis laborum nulla repellendus nobis.
              </motion.p>
            </div>
            <div
              css={css`
                ${getGridItemStyles({ sizes: { xs: 12, md: 6 } })}
              `}
            >
              <motion.p variants={pVariants}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae vel sit provident facere a nemo neque quidem iste,
                soluta expedita tenetur exercitationem ratione aperiam iusto
                veritatis laborum nulla repellendus nobis.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
