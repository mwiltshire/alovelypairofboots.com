import * as React from 'react';
import { createScrollTo } from '../utils/scrollTo';

interface DesktopNavMenuListProps {
  items: string[];
}

const scrollTo = createScrollTo();

export function DesktopNavMenuList({ items }: DesktopNavMenuListProps) {
  return (
    <ul className="hidden list-none p-0 m-0 md:flex flex-row items-center">
      {items.map(item => (
        <li key={item} className="m-2">
          <a
            className="p-2 text-inherit cursor-pointer no-underline hover:bg-white"
            href={`#${item.toLowerCase()}`}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              scrollTo(`#${item.toLowerCase()}`);
            }}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}
