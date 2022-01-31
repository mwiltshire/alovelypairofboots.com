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
            Old Stables. Depending on the room, the rate will be around £60-£100
            per night. Please note the bathrooms are shared by about three
            rooms. A self-service, continental breakfast will be provided in the
            shared kitchens of each house, but feel free to bring anything else
            you may like.
          </p>
          <p>
            Bore Place also has two additional cottages, a shepherds hut, two
            luxury yurts or the option to bring your own tent for a small pitch
            fee (rates to be confirmed).
          </p>
          <p>
            If you are interested in these options let us know in the RSVP form
            below and we shall do our best to accommodate you.
          </p>
          <p>
            There are also some Airbnb options nearby and Sevenoaks is only a 20
            minute drive from the venue.
          </p>
        </div>
      </SectionCard>
    </Section>
  );
}
