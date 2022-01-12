import * as React from 'react';
import { Box } from '../components/Box';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export function Section({ children, id, className }: SectionProps) {
  return (
    <Box
      as="section"
      id={id}
      display="flex"
      alignItems="center"
      minHeight="100vh"
      className={className}
    >
      {children}
    </Box>
  );
}
