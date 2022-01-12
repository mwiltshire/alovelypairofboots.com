import React from 'react';
import styled from 'styled-components';
import { flexbox, FlexboxProps } from 'styled-system';
import { Box } from './Box';

interface ContainerProps extends FlexboxProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <Box position="relative" px="1rem" m="0 auto" width="100%" maxWidth="30rem">
      {children}
    </Box>
  );
}
