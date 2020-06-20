import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { motion, useAnimation } from 'framer-motion';
import { Theme } from '../theme';
import { Section } from './section';
import { MotionH2 } from './motion-h2';
import { useAnimateInView } from '../use-animate-in-view';
import { createGrid } from '../grid-helpers';

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

const { getGridContainerStyles, getGridItemStyles } = createGrid({
  spacing: '2vmin'
});

const gridContainerStyles = getGridContainerStyles();

const gridItemStyles = getGridItemStyles({ sizes: { xs: 12, md: 6 } });

const H3 = styled(motion.h3)<H3Props>`
  letter-spacing: 0.1rem;
  font-size: ${props => props.theme.fontSizes.xs};
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const Line = styled(motion.div)`
  height: 3px;
  width: 2rem;
  background: #8d9892;
  margin-bottom: 1rem;
`;

export const Venue = () => {
  const animation = useAnimation();
  const [ref] = useAnimateInView(() => animation.start('visible'), {
    threshold: 0.1
  });
  return (
    <Section id="venue">
      <motion.div
        ref={ref}
        animate={animation}
        variants={wrapperVariants}
        initial="hidden"
      >
        <MotionH2 variants={headerVariants}>Venue</MotionH2>
        <div css={css(gridContainerStyles)}>
          <div css={css(gridItemStyles)}>
            <H3 variants={headerVariants}>Location</H3>
            <Line variants={lineVariants} />
            <motion.p variants={pVariants}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              vel sit provident facere a nemo neque quidem iste, soluta expedita
              tenetur exercitationem ratione aperiam iusto veritatis laborum
              nulla repellendus nobis laborum nulla repellendus nobis.
            </motion.p>
          </div>
          <div css={css(gridItemStyles)}>
            <H3 variants={headerVariants}>Getting There</H3>
            <Line variants={lineVariants} />
            <motion.p variants={pVariants}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              vel sit provident facere a nemo neque quidem iste, soluta expedita
              tenetur exercitationem ratione aperiam iusto veritatis laborum
              nulla repellendus nobis aperiam iusto veritatis laborum nulla
              repellendus nobis.
            </motion.p>
          </div>
          <div css={css(gridItemStyles)}>
            <H3 variants={headerVariants}>Accommodation</H3>
            <Line variants={lineVariants} />
            <motion.p variants={pVariants}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              vel sit provident facere a nemo neque quidem iste, soluta expedita
              tenetur exercitationem ratione aperiam iusto veritatis laborum
              nulla.
            </motion.p>
          </div>
          <div css={css(gridItemStyles)}>
            <H3 variants={headerVariants}>Activities</H3>
            <Line variants={lineVariants} />
            <motion.p variants={pVariants}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              vel sit provident facere a nemo neque quidem iste, soluta expedita
              tenetur exercitationem ratione aperiam iusto veritatis laborum
              nulla repellendus nobis nulla repellendus nobis.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
