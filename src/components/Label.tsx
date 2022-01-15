import * as React from 'react';

interface LabelProps {
  children: React.ReactNode;
  inline?: boolean;
}

export function Label({ children, inline = false }: LabelProps) {
  const displayClass = inline ? 'inline-flex' : 'block';
  return (
    <label
      className={`${displayClass} items-center font-bold text-xs leading-6 cursor-pointer`}
    >
      {children}
    </label>
  );
}
