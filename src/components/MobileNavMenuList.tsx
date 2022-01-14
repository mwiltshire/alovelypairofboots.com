import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Box } from './Box';
import { createScrollTo } from '../utils/scrollTo';

interface MobileNavMenuListProps {
  items: string[];
  isExpanded: boolean;
  onNavItemClick: () => void;
}

const scrollTo = createScrollTo();

export function MobileNavMenuList({
  items,
  isExpanded,
  onNavItemClick
}: MobileNavMenuListProps) {
  // useEffect(() => {
  //   if (isExpanded) {
  //     // don't use overflow-hidden, as that toggles the scrollbar and causes layout shift
  //     document.body.style.position = 'fixed';
  //     document.body.style.overflowY = 'scroll';
  //     // alternatively, get bounding box of the menu, and set body height to that.
  //     document.body.style.height = '100vh';
  //     document.body.style.width = '100vw';
  //   } else {
  //     document.body.style.removeProperty('position');
  //     document.body.style.removeProperty('overflow-y');
  //     document.body.style.removeProperty('height');
  //     document.body.style.removeProperty('width');
  //   }
  // }, [isExpanded]);

  return isExpanded ? (
    <NavList as="ul">
      {items.map(i => (
        <Box as="li" key={i} m="0.5rem">
          <NavLink
            as="a"
            href={`#${i.toLowerCase()}`}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              onNavItemClick();
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
  ) : null;
}

const NavList = styled(Box)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  inset: 0;
  background-color: var(--white);
  z-index: 2;
  list-style: none;
  margin: 0;
  padding: 1rem;
  font-size: 3rem;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled(Box)`
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: var(--white);
    box-shadow: 0px 0px 0px 1px var(--black);
  }
`;
