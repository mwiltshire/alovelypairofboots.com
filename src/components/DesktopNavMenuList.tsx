import * as React from 'react';
import styled from 'styled-components';
import { Box } from './Box';
import { createScrollTo } from '../utils/scrollTo';

interface DesktopNavMenuListProps {
  items: string[];
}

const scrollTo = createScrollTo();

export function DesktopNavMenuList({ items }: DesktopNavMenuListProps) {
  return (
    <NavList as="ul" p="0" m="0">
      {items.map(i => (
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
  );
}

const NavList = styled(Box)`
  display: none;
  list-style: none;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
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
