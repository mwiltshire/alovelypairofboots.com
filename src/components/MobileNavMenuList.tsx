import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createScrollTo } from '../utils/scrollTo';

interface MobileNavMenuListProps {
  items: string[];
  isExpanded: boolean;
  onNavItemClick: () => void;
}

const scrollTo = createScrollTo();

const variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      delay: 0.5
    }
  }
};

const listItemVariants = {
  open: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    x: 15,
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

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

  return (
    <AnimatePresence>
      {isExpanded && (
        <motion.ul
          className={`fixed inset-0 flex lg:none items-center justify-center flex-col bg-beige z-20 list-none m-0 p-4 text-5xl`}
          variants={variants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          {items.map(item => (
            <motion.li key={item} className="m-2" variants={listItemVariants}>
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
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
