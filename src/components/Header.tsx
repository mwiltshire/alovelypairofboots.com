import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    <header className="fixed top-0 flex px-4 h-16 w-full z-10 font-handwritten text-2xl md:text-xl bg-beige">
      <nav className="flex flex-row justify-between w-full">
        <motion.a
          className="flex items-center text-inherit select-none cursor-pointer no-undeline z-30 font-bold md:font-normal"
          href="/"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            setIsMobileMenuExpanded(false);
            scrollTo('#home');
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1 } }}
        >
          A lovely pair of boots
        </motion.a>
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
