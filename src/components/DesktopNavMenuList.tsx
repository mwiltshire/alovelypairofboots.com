import * as React from 'react';
import { motion } from 'framer-motion';
import { createScrollTo } from '../utils/scrollTo';

interface DesktopNavMenuListProps {
  items: string[];
}

const scrollTo = createScrollTo();

const variants = {
  initial: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      staggerChildren: 0.05,
      delayChildren: 1
    }
  }
};

const listItemVariants = {
  initial: { y: -25 },
  show: { y: 0, transition: { duration: 0.5 } }
};

export function DesktopNavMenuList({ items }: DesktopNavMenuListProps) {
  return (
    <motion.ul
      className="hidden list-none p-0 m-0 md:flex flex-row items-center"
      variants={variants}
      initial="initial"
      animate="show"
    >
      {items.map(item => (
        <motion.li key={item} className="m-2" variants={listItemVariants}>
          <a
            className="p-2 text-inherit cursor-pointer no-underline hover:bg-white hover:shadow-[0px_0px_0px_1px_var(--black)_inset]"
            href={`#${item.toLowerCase()}`}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              scrollTo(`#${item.toLowerCase()}`);
            }}
          >
            {item}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}
