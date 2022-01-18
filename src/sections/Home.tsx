import * as React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Heading } from '../components/Heading';
import { LinkButton } from '../components/LinkButton';
import { Flower1 } from '../components/Flower1';
import { Flower2 } from '../components/Flower2';
import { createScrollTo } from '../utils/scrollTo';

const scrollTo = createScrollTo();

export function Home() {
  return (
    <Section id="home" fullHeight>
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Card>
          <motion.div
            className="absolute -z-10 top-[-50%] left-0 md:left-[-30%]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Flower1 />
          </motion.div>
          <motion.div
            className="absolute -z-10 bottom-[-50%] right-0 md:right-[-30%]"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Flower2 />
          </motion.div>
          <div className="stack stack-gap-lg items-center">
            <Heading level={1}>
              <span className="block text-center text-2xl">
                <span className="block text-6xl mb-8">Shauna & Chris</span> are
                getting married on <br />
                Tuesday 23rd August 2022
              </span>
            </Heading>
            <LinkButton
              href="#rsvp"
              onClick={e => {
                e.preventDefault();
                scrollTo('#rsvp');
              }}
            >
              RSVP
            </LinkButton>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}
