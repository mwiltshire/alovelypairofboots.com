import React from 'react';
import { css } from '@emotion/core';
import { motion } from 'framer-motion';
import { useTheme } from 'emotion-theming';
import Container from './container';
import { Theme } from '../theme';

const headerVariants = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  hidden: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const spanVariants = {
  visible: {
    y: 0,
    rotateX: '0deg',
    transition: {
      duration: 1
    }
  },
  hidden: {
    y: 100,
    rotateX: '90deg',
    transition: {
      duration: 1
    }
  }
};

const Home = () => {
  const theme = useTheme<Theme>();
  return (
    <section>
      <div
        css={css`
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 15px);
          background-color: ##fff7f7;
          & h1 {
            text-align: center;
            font-family: 'Great Vibes', serif;
            font-weight: 400;
            font-size: ${theme.fontSizes['5xl']};
          }
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="665"
          height="398"
          viewBox="0 0 665 398"
          fill="none"
          css={css`
            position: absolute;
            top: 3rem;
            left: 0;
            width: 40%;
            height: auto;
          `}
        >
          <path
            d="M42.6032 265.909C-80.4991 258.026 -98.5618 127.054 -92.2054 62.5528L22.2563 -187.475C227.594 -148.818 640.505 -55.2404 649.449 9.81046C660.628 91.124 473.752 149.387 378.933 117.232C284.114 85.0768 239.171 177.037 236.724 186.749C234.276 196.461 196.481 275.763 42.6032 265.909Z"
            fill="#FFF1F1"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="330"
          height="550"
          viewBox="0 0 330 550"
          fill="none"
          css={css`
            position: absolute;
            width: 20%;
            height: auto;
            right: 0;
            bottom: 0;
          `}
        >
          <path
            d="M22.7312 273.058C-81.2688 423.458 196.731 519.725 348.731 549.058C380.731 393.725 430.331 69.8584 372.731 17.0584C300.731 -48.9416 152.731 85.0584 22.7312 273.058Z"
            fill="#FFF1F1"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="532"
          height="245"
          viewBox="0 0 532 245"
          fill="none"
          css={css`
            position: absolute;
            width: 20%;
            height: auto;
            right: 50%;
            bottom: 0;
          `}
        >
          <path
            d="M266.836 15.2144C123.425 -44.4282 -25.2587 234.338 10.739 234.231C31.7377 234.169 443.659 233.773 511.647 233.572C583.142 233.36 446.099 89.7676 266.836 15.2144Z"
            fill="#8D9892"
            fillOpacity="0.28"
          />
        </svg>
        <Container>
          <motion.h1
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={spanVariants}
              css={css`
                display: block;
                font-size: ${theme.fontSizes['7xl']};
                margin-bottom: 1rem;
              `}
            >
              Chris & Shauna
            </motion.span>
            <motion.span
              variants={spanVariants}
              css={css`
                display: block;
                font-family: Raleway, sans-serif;
                font-size: ${theme.fontSizes.xs};
                font-weight: ${theme.fontWeights.normal};
                text-transform: uppercase;
                letter-spacing: 0.15rem;
                margin-bottom: 1rem;
              `}
            >
              are getting married on
            </motion.span>
            <motion.span
              variants={spanVariants}
              css={css`
                display: block;
                font-size: ${theme.fontSizes['3xl']};
                margin-bottom: 1rem;
              `}
            >
              Wednesday 23rd June 2021
            </motion.span>
          </motion.h1>
        </Container>
      </div>
    </section>
  );
};

export default Home;
