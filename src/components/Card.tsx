import * as React from 'react';

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className="relative p-12 w-full bg-white border-solid-black shadow-card">
      {children}
    </div>
  );
}
