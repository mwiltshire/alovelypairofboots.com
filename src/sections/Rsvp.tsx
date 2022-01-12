import * as React from 'react';
import { Section } from '../components/Section';
import { SectionCard } from '../components/SectionCard';
import { Heading } from '../components/Heading';
import { Box } from '../components/Box';
import { Stack } from '../components/Stack';
import { ContactForm } from '../components/ContactForm';

export function Rsvp() {
  return (
    <Section id="rsvp">
      <SectionCard>
        <Stack align="center">
          <Heading level={2}>RSVP</Heading>
          <Box as="p">
            Chris & Shauna joyfully request the pleasure of your company as we
            join in marriage in the presence of family and friends.
          </Box>
          <ContactForm />
        </Stack>
      </SectionCard>
    </Section>
  );
}
