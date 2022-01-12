import * as React from 'react';
import styled from 'styled-components';
import { Box } from './Box';
import { createScrollTo } from '../utils/scrollTo';

import '../style/global.css';

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
  return (
    <StyledHeader
      as="header"
      display="flex"
      alignItems="center"
      px="0.5rem"
      position="fixed"
      width="100%"
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
          href="#"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            scrollTo('#home');
          }}
          p="0.5rem"
          m="0.5rem"
          color="inherit"
        >
          A lovely pair of boots
        </Logo>
        <NavList
          as="ul"
          display="flex"
          flexDirection="row"
          alignItems="center"
          p="0"
          m="0"
        >
          {navItems.map(i => (
            <Box as="li" key={i} m="0.5rem">
              <NavLink
                as="a"
                href={`#${i.toLowerCase()}`}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  scrollTo(`#${i.toLowerCase()}`);
                }}
                p="0.5rem"
                color="inherit"
              >
                {i}
              </NavLink>
            </Box>
          ))}
        </NavList>
      </Box>
    </StyledHeader>
  );
}

const StyledHeader = styled(Box)`
  height: 4rem;
`;

const NavList = styled(Box)`
  list-style: none;
`;

const NavLink = styled(Box)`
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: var(--white);
    box-shadow: 0px 0px 0px 1px var(--black);
  }
`;

const Logo = styled(Box)`
  user-select: none;
  cursor: pointer;
  text-decoration: none;
`;
