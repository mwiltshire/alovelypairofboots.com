import * as React from 'react';

interface MenuButtonProps {
  onClick: () => void;
}

export function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <button
      className="flex items-center cursor-pointer z-30 font-handwritten font-bold md:hidden"
      onClick={onClick}
    >
      Menu
    </button>
  );
}
