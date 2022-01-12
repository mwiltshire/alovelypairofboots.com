import * as React from 'react';
import { Section } from '../components/Section';
import { SectionCard } from '../components/SectionCard';
import { Heading } from '../components/Heading';
import { Box } from '../components/Box';
import { Stack } from '../components/Stack';

export function Accommodation() {
  return (
    <Section id="accommodation">
      <SectionCard>
        <Stack align="center">
          <Heading level={2}>Accommodation</Heading>
          <Box as="p">
            We have paid for rooms at the venue. There is a limited number so if
            you would like to book one of these rooms, please let us know
            directly. Rooms will be given on a first come first served basis. A
            self-service, continental breakfast is provided the following
            morning in the shared kitchens, but feel free to bring anything to
            supplement this.
          </Box>
          <Box as="p">
            There is also the option to hire an on site shepherds hut or a
            luxury yurt, or you can even bring your own tent for a small pitch
            fee. These can be booked directly through the venue.
          </Box>
          <Box as="p">
            Alternatively, Bore Place is only a 20 minute drive from Sevenoaks,
            where you will be able to find a variety of accommodation options.
          </Box>
        </Stack>
      </SectionCard>
    </Section>
  );
}
