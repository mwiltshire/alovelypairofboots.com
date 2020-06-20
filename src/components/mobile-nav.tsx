import React, { FC } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { motion, AnimatePresence, useCycle } from 'framer-motion';
import { MobileNavButton } from './mobile-nav-button';
import { Theme } from '../theme';
import { BP_MIN_MD } from '../breakpoints';

export interface Props {
  items: string[];
}

const backgroundVariants = {
  open: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1
    }
  },
  closed: {
    opacity: 0,
    transition: {
      delay: 0.5,
      duration: 1.3
    }
  }
};

const navListVariants = {
  open: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const navItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 1
    }
  }
};

export const MobileNav: FC<Props> = ({ items }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const theme = useTheme<Theme>();
  return (
    <div
      css={css`
        display: block;
        ${BP_MIN_MD} {
          display: none;
        }
      `}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="background"
            variants={backgroundVariants}
            initial="closed"
            animate="open"
            exit="closed"
            css={css`
              position: absolute;
              display: flex;
              align-items: center;
              justify-content: center;
              top: 0;
              left: 0;
              height: 100vh;
              width: 100vw;
              background-color: #dabeb3;
              z-index: -1;
            `}
          >
            <motion.ul
              key="navList"
              variants={navListVariants}
              css={css`
                margin: 0;
                & li {
                  font-family: 'Butler', sans-serif;
                  list-style: none;
                  font-size: ${theme.fontSizes['4xl']};
                  font-weight: ${theme.fontWeights.normal};
                  text-transform: uppercase;
                  letter-spacing: 0.15rem;
                  text-align: center;
                }
              `}
            >
              {items.map(item => (
                <motion.li variants={navItemVariants} key={item}>
                  <a
                    onClick={e => {
                      if (window.location.pathname === '/') {
                        e.preventDefault();
                        toggleOpen();
                        scrollTo(`#${item.toLowerCase()}`);
                      }
                    }}
                    href={`/#${item.toLowerCase()}`}
                    css={css`
                      position: relative;
                      text-decoration: none;
                      color: inherit;
                      &:visited {
                        color: inherit;
                      }
                    `}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
      <MobileNavButton isClicked={isOpen} onClick={toggleOpen} />
    </div>
  );
};
