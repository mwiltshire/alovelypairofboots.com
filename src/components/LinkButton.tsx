import * as React from 'react';
import styled from 'styled-components';
import { Box } from '../components/Box';
import { buttonStyles } from '../components/Button';

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
      fontFamily="'Amatic SC', sans-serif"
      fontSize="1.25rem"
      color="inherit"
    >
      {children}
    </StyledLinkButton>
  );
}

const StyledLinkButton = styled(Box)`
  ${buttonStyles}
`;
