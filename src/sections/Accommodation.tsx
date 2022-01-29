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
            We have booked a limited number of rooms at Bore Place House and the
            Old Stables. If you would like to reserve one of these rooms let us
            know in the RSVP form below and we shall do out best to accommodate
            you. Please note the bathrooms are shared by about three rooms.
            Depending on the room, the rate will be around £60-£100 per night. A
            self-service, continental breakfast will be provided in the shared
            kitchens of each house, but feel free to bring anything to
            supplement this.
          </p>
          <p>
            Separately, Bore Place also have available two cottages, a shepherds
            hut and two luxury yurts. You can also bring your own tent for a
            small pitch fee. Please book these options through the venue.
          </p>
          <p>
            Alternatively, there are Airbnb options nearby and the venue is only
            a 20 minute drive from Sevenoaks.
          </p>
        </div>
      </SectionCard>
    </Section>
  );
}
