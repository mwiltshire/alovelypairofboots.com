import * as React from 'react';

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function LinkButton({ children, href, onClick }: LinkButtonProps) {
  return (
    <a
      className="font-handwritten text-xl text-inherit btn"
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
