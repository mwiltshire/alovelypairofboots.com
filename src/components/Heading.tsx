import * as React from 'react';
import styled from 'styled-components';
import { typography, space, TypographyProps, SpaceProps } from 'styled-system';
import { Box } from './Box';

interface HeadingProps extends TypographyProps, SpaceProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

function BaseHeading({ children, level, ...styleProps }: HeadingProps) {
  return (
    <Box as={elements[level - 1]} {...styleProps}>
      {children}
    </Box>
  );
}

export const Heading = styled(BaseHeading)<TypographyProps>`
  ${typography}
  ${space}
`;
