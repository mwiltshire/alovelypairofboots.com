import * as React from 'react';
import { Section } from '../components/Section';
import { SectionCard } from '../components/SectionCard';
import { Heading } from '../components/Heading';

export function Accommodation() {
  return (
    <Section id="accommodation">
      <SectionCard>
        <div className="stack items-center">
          <Heading level={2}>Accommodation</Heading>
          <p>
            We have a limited number of rooms at Bore Place and these have now
            been allocated.
          </p>
          <p>
            Bore Place Farm have available two shepards huts and two yurts which
            you can book{' '}
            <a
              className="underline decoration-green decoration-2 underline-offset-2"
              href="https://www.freerangeglamping.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
          <p>
            You may also bring your own tent for a small pitch fee. If you would
            like this option please mention it in the RSVP form below and we’ll
            let you know the details once confirmed by the venue.
          </p>
          <p>
            There are a few B&Bs, hotels and Airbnbs in the area including{' '}
            <a
              className="underline decoration-green decoration-2 underline-offset-2"
              href="https://www.greyhoundhever.co.uk/bed-and-breakfast/"
              target="_blank"
              rel="noreferrer"
            >
              The Greyhound Inn
            </a>{' '}
            and{' '}
            <a
              className="underline decoration-green decoration-2 underline-offset-2"
              href="https://www.theleicesterarms.com/our-rooms"
              target="_blank"
              rel="noreferrer"
            >
              The Leicester Arms
            </a>{' '}
            which are about 10 minutes drive from the venue.
          </p>
        </div>
      </SectionCard>
    </Section>
  );
}
