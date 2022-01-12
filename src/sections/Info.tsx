import * as React from 'react';
import { Section } from '../components/Section';
import { SectionCard } from '../components/SectionCard';
import { Heading } from '../components/Heading';
import { Box } from '../components/Box';
import { Stack } from '../components/Stack';

export function Info() {
  return (
    <Section id="info">
      <SectionCard>
        <Stack align="center">
          <Heading level={2}>Info</Heading>
          <Box as="p">
            We’ve chosen an eco, self-catering venue, so we’re keeping it
            relaxed.
          </Box>
          <Box as="p">
            Dress code is formal but comfortable, it will be peak summer after
            all and there are lovely grounds to roam. Weather permitting, the
            ceremony will be outdoors and we may well spend most of the day in
            the gardens.
          </Box>
          <Box as="p">
            We will of course be feeding and watering you, but feel free to
            bring any extra food and drink that you may want.
          </Box>
          <Box as="p">
            We love your kids (we really do!), but we will not be having
            children present. We hope you understand our decision to make the
            wedding adults only, and can take the opportunity to let your hair
            down and celebrate with us.
          </Box>
        </Stack>
      </SectionCard>
    </Section>
  );
}
