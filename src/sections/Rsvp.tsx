import * as React from 'react';
import { Section } from '../components/Section';
import { SectionCard } from '../components/SectionCard';
import { Heading } from '../components/Heading';
import { ContactForm } from '../components/ContactForm';

export function Rsvp() {
  return (
    <Section id="rsvp">
      <SectionCard>
        <div className="stack items-center">
          <Heading level={2}>RSVP</Heading>
          <p>
            Chris & Shauna joyfully request the pleasure of your company as we
            join in marriage in the presence of family and friends.
          </p>
          <ContactForm />
        </div>
      </SectionCard>
    </Section>
  );
}
