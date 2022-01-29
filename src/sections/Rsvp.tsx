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
              Please let us know if you are able to join us by completing the
              form below. We look forward to seeing you!
            </motion.p>
            <ContactForm />
          </div>
        </SectionCard>
      </LayoutGroup>
    </Section>
  );
}
