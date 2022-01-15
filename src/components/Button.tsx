import * as React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit';
}

export function Button({ children, type = 'button' }: ButtonProps) {
  return (
    <button className="btn font-bold text-sm" type={type}>
      {children}
    </button>
  );
}
