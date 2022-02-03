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
            We have a very limited number of rooms in Bore Place House and the
            Old Stables. Depending on the room, the rate will be around £60-£120
            per night. Please note the bathrooms are shared by about three
            rooms. A self-service, continental breakfast will be provided in the
            shared kitchens of each house, but feel free to bring anything else
            you may like. If you are interested in a room let us know in the
            RSVP form below and we shall do our best to accommodate you.
          </p>
          <p>
            Camping is allowed on site for a small pitch fee. If you plan to do
            this let us know in the RSVP form below so the venue can prepare the
            site.
          </p>
          <p>
            Bore Place Farm also has two shepards huts and two yurts which you
            can book{' '}
            <a
              className="underline decoration-green decoration-3 underline-offset-1"
              href="https://www.freerangeglamping.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
          <p>
            There are also some Airbnb options in the area and Sevenoaks is only
            a 20 minute drive from the venue.
          </p>
        </div>
      </SectionCard>
    </Section>
  );
}
