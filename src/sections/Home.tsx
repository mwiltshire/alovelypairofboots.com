import * as React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Flower1 } from '../components/Flower1';
import { Flower2 } from '../components/Flower2';

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
            className="absolute -z-10 top-[-35%] left-0 md:left-[-35%] h-2/3 w-2/3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Flower1 />
          </motion.div>
          <motion.div
            className="absolute -z-10 bottom-[-35%] right-0 md:right-[-35%] h-2/3 w-2/3"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Flower2 />
          </motion.div>
          <div className="relative h-0 w-full pb-[56.25%]">
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              title="Wedding video"
              src="https://player.vimeo.com/video/772602839?h=93eda79092&byline=false&title=false"
              allow="autoplay"
            ></iframe>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}
