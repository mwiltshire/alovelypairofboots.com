import * as React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export function Heading({ children, level, className }: HeadingProps) {
  const Component = elements[level - 1];
  return (
    <Component className={`font-handwritten ${className}`}>
      {children}
    </Component>
  );
}
