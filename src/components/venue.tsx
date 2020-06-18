import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { motion, useAnimation } from 'framer-motion';
import { Theme } from '../theme';
import Container from './container';
import { useAnimateInView } from '../use-animate-in-view';
import { createGrid } from '../grid-helpers';

const { getGridContainerStyles, getGridItemStyles } = createGrid({
  spacing: 15
});

const gridItemStyles = getGridItemStyles({ sizes: { xs: 12, md: 6 } });

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
    rotateX: '0deg',
    transition: { duration: 1 }
  },
  hidden: {
    y: 100,
    rotateX: '90deg'
  }
};

const lineVariants = {
  visible: {
    y: 0,
    scale: 1,
    transition: { duration: 1 }
  },
  hidden: {
    y: 100,
    scale: 0
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

interface H3Props {
  theme: Theme;
}

const H3 = styled(motion.h3)<H3Props>`
  letter-spacing: 0.15rem;
  font-size: ${props => props.theme.fontSizes.xs};
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  width: 2rem;
  background: #8d9892;
  margin-bottom: 1rem;
`;

export const Venue = () => {
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
            Venue
          </motion.h2>
          <div
            css={css`
              ${getGridContainerStyles()}
            `}
          >
            <div
              css={css`
                ${gridItemStyles}
              `}
            >
              <H3 variants={headerVariants}>Location</H3>
              <Line variants={lineVariants} />
              <motion.p variants={pVariants}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae vel sit provident facere a nemo neque quidem iste,
                soluta expedita tenetur exercitationem ratione aperiam iusto
                veritatis laborum nulla repellendus nobis laborum nulla
                repellendus nobis.
              </motion.p>
            </div>
            <div
              css={css`
                ${gridItemStyles}
              `}
            >
              <H3 variants={headerVariants}>Getting There</H3>
              <Line variants={lineVariants} />
              <motion.p variants={pVariants}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae vel sit provident facere a nemo neque quidem iste,
                soluta expedita tenetur exercitationem ratione aperiam iusto
                veritatis laborum nulla repellendus nobis aperiam iusto
                veritatis laborum nulla repellendus nobis.
              </motion.p>
            </div>
            <div
              css={css`
                ${gridItemStyles}
              `}
            >
              <H3 variants={headerVariants}>Accommodation</H3>
              <Line variants={lineVariants} />
              <motion.p variants={pVariants}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae vel sit provident facere a nemo neque quidem iste,
                soluta expedita tenetur exercitationem ratione aperiam iusto
                veritatis laborum nulla.
              </motion.p>
            </div>
            <div
              css={css`
                ${gridItemStyles}
              `}
            >
              <H3 variants={headerVariants}>Activities</H3>
              <Line variants={lineVariants} />
              <motion.p variants={pVariants}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae vel sit provident facere a nemo neque quidem iste,
                soluta expedita tenetur exercitationem ratione aperiam iusto
                veritatis laborum nulla repellendus nobis nulla repellendus
                nobis.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
