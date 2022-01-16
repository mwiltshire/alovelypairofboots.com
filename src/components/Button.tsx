import * as React from 'react';
import { Spinner } from './Spinner';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  disabled?: boolean;
  loading?: boolean;
}

export function Button({
  children,
  type = 'button',
  disabled = false,
  loading = false
}: ButtonProps) {
  return (
    <button
      className="btn relative flex items-center justify-center font-bold text-sm"
      type={type}
      disabled={disabled}
    >
      <span className={`${loading ? 'opacity-0' : 'opacity-1'}`}>
        {children}
      </span>
      {loading && (
        <span className="absolute">
          <Spinner />
        </span>
      )}
    </button>
  );
}
