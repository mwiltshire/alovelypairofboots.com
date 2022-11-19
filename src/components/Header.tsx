import React from 'react';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <header className="fixed top-0 flex px-4 h-16 w-full z-10 font-handwritten text-2xl bg-transparent">
      <nav className="flex flex-row justify-center w-full">
        <motion.a
          className="flex items-center text-inherit select-none cursor-pointer no-undeline z-30 font-bold md:font-normal"
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1 } }}
        >
          A lovely pair of boots
        </motion.a>
      </nav>
    </header>
  );
}
