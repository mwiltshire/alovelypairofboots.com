import React, { useEffect } from 'react';
import { createScrollTo } from '../utils/scrollTo';

interface MobileNavMenuListProps {
  items: string[];
  isExpanded: boolean;
  onNavItemClick: () => void;
}

const scrollTo = createScrollTo();

export function MobileNavMenuList({
  items,
  isExpanded,
  onNavItemClick
}: MobileNavMenuListProps) {
  // useEffect(() => {
  //   if (isExpanded) {
  //     // don't use overflow-hidden, as that toggles the scrollbar and causes layout shift
  //     document.body.style.position = 'fixed';
  //     document.body.style.overflowY = 'scroll';
  //     // alternatively, get bounding box of the menu, and set body height to that.
  //     document.body.style.height = '100vh';
  //     document.body.style.width = '100vw';
  //   } else {
  //     document.body.style.removeProperty('position');
  //     document.body.style.removeProperty('overflow-y');
  //     document.body.style.removeProperty('height');
  //     document.body.style.removeProperty('width');
  //   }
  // }, [isExpanded]);

  return isExpanded ? (
    <ul className="fixed inset-0 flex lg:none items-center justify-center flex-col bg-white z-20 list-none m-0 p-4 text-5xl">
      {items.map(item => (
        <li key={item} className="m-2">
          <a
            className="cursor-pointer no-underline p-2 text-inherit"
            href={`#${item.toLowerCase()}`}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              onNavItemClick();
              scrollTo(`#${item.toLowerCase()}`);
            }}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  ) : null;
}
