import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Theme } from '../theme';

export const Logo = () => {
  const theme = useTheme<Theme>();
  return (
    <span
      // Without display flex, the logo text is bumped
      // a few pixels out of vertical alignment in the
      // navbar...
      css={css`
        display: flex;
        user-select: none;
        text-transform: uppercase;
        font-size: ${theme.fontSizes.xs};
        letter-spacing: 0.1rem;
        font-weight: ${theme.fontWeights.normal};
      `}
    >
      A lovely pair of boots
    </span>
  );
};
