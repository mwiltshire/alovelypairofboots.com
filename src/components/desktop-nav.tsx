import React, { FC } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Theme } from '../theme';
import { BP_MIN_MD } from '../breakpoints';

export interface Props {
  items: string[];
}

export const DesktopNav: FC<Props> = ({ items }) => {
  const theme = useTheme<Theme>();
  return (
    <ul
      css={css`
        display: none;
        margin: 0;
        font-size: ${theme.fontSizes.xs};
        font-weight: ${theme.fontWeights.normal};
        text-transform: uppercase;
        letter-spacing: 0.15rem;
        & > * + * {
          margin-left: 2rem;
        }
        & li {
          list-style: none;
          margin-bottom: 0;
        }
        ${BP_MIN_MD} {
          display: flex;
        }
      `}
    >
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
