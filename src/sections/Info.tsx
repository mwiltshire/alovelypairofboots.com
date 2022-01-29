import * as React from 'react';
import { Section } from '../components/Section';
import { SectionCard } from '../components/SectionCard';
import { Heading } from '../components/Heading';

export function Info() {
  return (
    <Section id="info">
      <SectionCard>
        <div className="stack items-center">
          <Heading level={2}>Info</Heading>
          <p>
            We’ve chosen a self-catering, eco-friendly venue and we’re keeping
            it relaxed. Weather permitting, the ceremony will be outdoors and
            there are beautiful gardens surrounding the house and barn. The
            dress code is therefore formal but comfortable.
          </p>
          <p>
            We will of course be feeding and watering you on the day, but feel
            free to bring any extra food and drink that you may want as there is
            no corkage (please just make sure to recycle!).
          </p>
          <p>
            We love your kids (we really do!), but we will not be having
            children present. We hope you understand our decision to make the
            wedding adults only and can take the opportunity to let your hair
            down and celebrate with us.
          </p>
          <p>
            There is limited parking at the venue so we encourage you to
            car-share and pre-book taxis where possible.
          </p>
        </div>
      </SectionCard>
    </Section>
  );
}
