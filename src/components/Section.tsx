import * as React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id: string;
}

export function Section({ children, id }: SectionProps) {
  return (
    <section className="flex items-center min-h-screen py-16" id={id}>
      {children}
    </section>
  );
}
