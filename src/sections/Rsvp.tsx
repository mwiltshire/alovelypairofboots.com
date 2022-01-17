import * as React from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { Section } from '../components/Section';
import { SectionCard } from '../components/SectionCard';
import { Heading } from '../components/Heading';
import { ContactForm } from '../components/ContactForm';

export function Rsvp() {
  return (
    <Section id="rsvp">
      <LayoutGroup>
        <SectionCard>
          <div className="stack items-center">
            <motion.div layout>
              <Heading level={2}>RSVP</Heading>
            </motion.div>
            <motion.p layout>
              Chris & Shauna joyfully request the pleasure of your company as we
              join in marriage in the presence of family and friends.
            </motion.p>
            <ContactForm />
          </div>
        </SectionCard>
      </LayoutGroup>
    </Section>
  );
}
