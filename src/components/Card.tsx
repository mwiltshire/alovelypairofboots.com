import * as React from 'react';

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className="relative py-8 px-6 md:px-12 w-full bg-white border-solid-black shadow-card">
      {children}
    </div>
  );
}
