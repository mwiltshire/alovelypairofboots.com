import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Logo } from './logo';
import { GatsbyLink } from './link';
import { MobileNav } from './mobile-nav';
import { DesktopNav } from './desktop-nav';
import { Theme } from '../theme';

const navItems = ['Info', 'Venue', 'Timetable', 'Gifts', 'RSVP'];

const Header = () => {
  const theme = useTheme<Theme>();
  return (
    <header
      css={css`
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 3rem;
        background: ${theme.colors.white};
        z-index: 9999;
      `}
    >
      <nav
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 2vmin;
          height: 100%;
          & > svg {
            z-index: 2;
          }
        `}
      >
        <GatsbyLink
          to="/"
          aria-label="Go to homepage"
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <Logo />
        </GatsbyLink>
        <MobileNav items={navItems} />
        <DesktopNav items={navItems} />
      </nav>
    </header>
  );
};

export default Header;
