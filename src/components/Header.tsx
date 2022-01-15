import React, { useState } from 'react';
import { MobileNavMenuList } from './MobileNavMenuList';
import { createScrollTo } from '../utils/scrollTo';
import { DesktopNavMenuList } from './DesktopNavMenuList';
import { MenuButton } from './MenuButton';

const scrollTo = createScrollTo();

const navItems = [
  'Venue',
  'Timetable',
  'Info',
  'Accommodation',
  'Registry',
  'RSVP'
];

export function Header() {
  const [isMobileMenuExpanded, setIsMobileMenuExpanded] = useState(false);

  return (
    <header className="fixed top-0 flex px-4 h-16 w-full z-10 font-handwritten text-xl">
      <nav className="flex flex-row justify-between w-full">
        <a
          className="flex items-center text-inherit p-2 select-none cursor-pointer no-undeline z-30"
          href="/"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            scrollTo('#home');
          }}
        >
          A lovely pair of boots
        </a>
        <MobileNavMenuList
          items={navItems}
          isExpanded={isMobileMenuExpanded}
          onNavItemClick={() => setIsMobileMenuExpanded(false)}
        />
        <DesktopNavMenuList items={navItems} />
        <MenuButton onClick={() => setIsMobileMenuExpanded(prev => !prev)} />
      </nav>
    </header>
  );
}
