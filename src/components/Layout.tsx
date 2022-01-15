import * as React from 'react';
import { Seo } from './Seo';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Seo />
      <Header />
      <main className="overflow-hidden px-12 md:p-0">{children}</main>
    </>
  );
}
