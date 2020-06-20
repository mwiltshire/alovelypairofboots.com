import React, { FC } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Theme } from '../theme';
import { BP_MIN_MD } from '../breakpoints';
import { scrollTo } from '../scroll-to';

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
        letter-spacing: 0.1rem;
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
      {items.map(item => {
        const hash = `#${item.toLowerCase()}`;
        return (
          <li key={item}>
            <a
              css={css`
                position: relative;
                text-decoration: none;
                color: currentColor;
                &:after {
                  content: '';
                  transform: scale(0);
                  transition: transform 350ms ease;
                }
                &:hover:after {
                  content: '';
                  position: absolute;
                  bottom: -6px;
                  left: 0;
                  height: 3px;
                  width: 97%;
                  background: #8d9892;
                  transform: scale(1);
                }
              `}
              href={hash}
              onClick={e => {
                e.preventDefault();
                scrollTo({ hash, offset: -48 });
              }}
            >
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
