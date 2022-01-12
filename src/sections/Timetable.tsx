import * as React from 'react';
import { Section } from '../components/Section';
import { SectionCard } from '../components/SectionCard';
import { Heading } from '../components/Heading';
import { Box } from '../components/Box';
import { Stack } from '../components/Stack';

const timetable = [
  { time: '2:00 pm', event: 'Ceremony' },
  { time: '2:45 pm', event: 'Drinks and canapés' },
  { time: '4:30 pm', event: 'Wedding breakfast' },
  { time: '6:00pm', event: 'Speeches' },
  { time: '7:00 pm', event: 'Cutting of the cake and first dance' },
  { time: '9:00 pm', event: 'Evening food' },
  { time: '12:00 am', event: 'Carriages/afterparty' }
];

export function Timetable() {
  return (
    <Section id="timetable">
      <SectionCard>
        <Stack align="center">
          <Heading level={2}>Timetable</Heading>
          {timetable.map(({ time, event }) => (
            <Box as="p" key="time" textAlign="center">
              <Box
                as="span"
                display="block"
                marginBottom="0.25rem"
                fontWeight="700"
              >
                {time}
              </Box>
              <Box as="span" display="block">
                {event}
              </Box>
            </Box>
          ))}
        </Stack>
      </SectionCard>
    </Section>
  );
}
