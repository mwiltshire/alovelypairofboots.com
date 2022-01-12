import * as React from 'react';
import { Seo } from './Seo';
import { Box } from './Box';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Seo />
      <Header />
      <Box as="main">{children}</Box>
    </>
  );
}
