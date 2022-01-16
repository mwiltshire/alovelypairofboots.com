import * as React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  fullHeight?: boolean;
}

export function Section({ children, id, fullHeight = false }: SectionProps) {
  return (
    <section
      className={`flex items-center ${
        fullHeight && 'min-h-screen'
      } md:min-h-screen py-16`}
      id={id}
    >
      {children}
    </section>
  );
}
