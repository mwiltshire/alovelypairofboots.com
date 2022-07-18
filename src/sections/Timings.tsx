import * as React from 'react';
import { Section } from '../components/Section';
import { SectionCard } from '../components/SectionCard';
import { Heading } from '../components/Heading';

const timings = [
  { time: '2:00 pm', event: 'Ceremony' },
  { time: '2:45 pm', event: 'Drinks' },
  { time: '4:30 pm', event: 'Paella' },
  { time: '6:30 pm', event: 'Coffee and Cake' },
  { time: '7:00 pm', event: 'Evening Guests Arrive' },
  { time: '9:00 pm', event: 'Evening Food' },
  { time: '12:00 am', event: 'Taxis' }
];

export function Timings() {
  return (
    <Section id="timings">
      <SectionCard>
        <div className="stack items-center">
          <Heading level={2}>Timings</Heading>
          {timings.map(({ time, event }) => (
            <p className="text-center" key={time}>
              <span className="block font-bold mb-1">{time}</span>
              <span className="block">{event}</span>
            </p>
          ))}
        </div>
      </SectionCard>
    </Section>
  );
}
