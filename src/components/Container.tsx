import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="relative px-4 mt-0 mx-auto w-full max-w-lg">{children}</div>
  );
}
