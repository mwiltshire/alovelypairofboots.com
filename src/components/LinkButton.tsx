import * as React from 'react';
import styled from 'styled-components';
import { Box } from '../components/Box';

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function LinkButton({ children, href, onClick }: LinkButtonProps) {
  return (
    <StyledLinkButton
      as="a"
      href={href}
      onClick={onClick}
      p="0.5rem 2rem"
      width="fit-content"
      fontFamily="'Amatic SC', sans-serif"
      fontSize="1.25rem"
      color="inherit"
    >
      {children}
    </StyledLinkButton>
  );
}

const StyledLinkButton = styled(Box)`
  border: 1px solid var(--black);
  cursor: pointer;
  text-decoration: none;
  transition: box-shadow 250ms ease;
  &:hover {
    box-shadow: 3px 3px 0px var(--black);
  }
`;
