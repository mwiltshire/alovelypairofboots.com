import * as React from 'react';
import { Section } from '../components/Section';
import { SectionCard } from '../components/SectionCard';
import { Heading } from '../components/Heading';
import { Box } from '../components/Box';
import { Stack } from '../components/Stack';

export function Registry() {
  return (
    <Section id="registry">
      <SectionCard>
        <Stack align="center">
          <Heading level={2}>Registry</Heading>
          <Box as="p">
            Many of you are traveling across the globe to celebrate with us in
            Kent, so your presence means the world to us and is all we ask for.
            If you’d still like to contribute to our registry or honeymoon
            funds, please select from the options below.
          </Box>
        </Stack>
      </SectionCard>
    </Section>
  );
}
