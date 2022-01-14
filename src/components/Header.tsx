import React, { useState } from 'react';
import styled from 'styled-components';
import { Box } from './Box';
import { MobileNavMenuList } from './MobileNavMenuList';
import { createScrollTo } from '../utils/scrollTo';

import '../style/global.css';
import { DesktopNavMenuList } from './DesktopNavMenuList';
import { MenuButton } from './MenuButton';

const scrollTo = createScrollTo();

const navItems = [
  'Venue',
  'Timetable',
  'Info',
  'Accommodation',
  'Registry',
  'RSVP'
];

export function Header() {
  const [isMobileMenuExpanded, setIsMobileMenuExpanded] = useState(false);

  return (
    <StyledHeader
      as="header"
      display="flex"
      alignItems="center"
      px="1rem"
      position="fixed"
      width="100%"
      zIndex="1"
    >
      <Box
        as="nav"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
      >
        <Logo
          as="a"
          p="0.5rem"
          color="inherit"
          display="flex"
          alignItems="center"
          href="/"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            scrollTo('#home');
          }}
        >
          A lovely pair of boots
        </Logo>
        <MobileNavMenuList
          items={navItems}
          isExpanded={isMobileMenuExpanded}
          onNavItemClick={() => setIsMobileMenuExpanded(false)}
        />
        <DesktopNavMenuList items={navItems} />
        <MenuButton onClick={() => setIsMobileMenuExpanded(prev => !prev)} />
      </Box>
    </StyledHeader>
  );
}

const StyledHeader = styled(Box)`
  height: 4rem;
`;

const Logo = styled(Box)`
  user-select: none;
  cursor: pointer;
  text-decoration: none;
  z-index: 3;
`;
