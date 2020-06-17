import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Theme } from '../theme';

export const Logo = () => {
  const theme = useTheme<Theme>();
  return (
    <span
      css={css`
        user-select: none;
        text-transform: uppercase;
        font-size: ${theme.fontSizes.xs};
        letter-spacing: 0.15rem;
        font-weight: ${theme.fontWeights.normal};
      `}
    >
      A lovely pair of boots
    </span>
  );
};
