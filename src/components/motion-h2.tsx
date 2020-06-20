import React, { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Theme } from '../theme';

interface MotionH2Props {
  variants: Variants;
}

export const MotionH2: FC<MotionH2Props> = ({ variants, children }) => {
  const theme = useTheme<Theme>();
  return (
    <motion.h2
      variants={variants}
      css={css`
        text-align: center;
        font-family: 'Butler', serif;
        font-weight: 400;
        font-size: ${theme.fontSizes['3xl']};
        margin-bottom: 4rem;
      `}
    >
      {children}
    </motion.h2>
  );
};
