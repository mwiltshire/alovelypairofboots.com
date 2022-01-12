import React from 'react';
import styled from 'styled-components';
import { Box } from './Box';

type StackDirection = 'row' | 'column';

interface StackProps {
  children: React.ReactNode;
  gap?: string;
  direction?: StackDirection;
  align?: 'center';
}

export function Stack({
  children,
  gap = '1rem',
  direction = 'column',
  align
}: StackProps) {
  return (
    <StyledBox
      display="flex"
      flexDirection={direction}
      alignItems={align}
      gap={gap}
      direction={direction}
    >
      {children}
    </StyledBox>
  );
}

const StyledBox = styled(Box)<{ direction: StackDirection; gap: string }>`
  & > * + * {
    margin: ${({ direction, gap }) =>
      direction === 'row' ? `0 0 0 ${gap}` : `${gap} 0 0 0`};
  }
`;
