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
            We’ve chosen an eco, self-catering venue, so we’re keeping it
            relaxed.
          </p>
          <p>
            Dress code is formal but comfortable, it will be peak summer after
            all and there are lovely grounds to roam. Weather permitting, the
            ceremony will be outdoors and we may well spend most of the day in
            the gardens.
          </p>
          <p>
            We will of course be feeding and watering you, but feel free to
            bring any extra food and drink that you may want.
          </p>
          <p>
            We love your kids (we really do!), but we will not be having
            children present. We hope you understand our decision to make the
            wedding adults only, and can take the opportunity to let your hair
            down and celebrate with us.
          </p>
        </div>
      </SectionCard>
    </Section>
  );
}
