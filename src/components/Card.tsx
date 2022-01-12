import * as React from 'react';
import styled from 'styled-components';
import { Box } from './Box';

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <StyledCard
      backgroundColor="var(--white)"
      position="relative"
      p="2rem"
      width="100%"
    >
      {children}
    </StyledCard>
  );
}

const StyledCard = styled(Box)`
  border: 1px solid var(--black);
  box-shadow: -1px 1px 0px 2px var(--white);
`;
