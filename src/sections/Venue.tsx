import * as React from 'react';
import { Section } from '../components/Section';
import { SectionCard } from '../components/SectionCard';
import { Heading } from '../components/Heading';

export function Venue() {
  return (
    <Section id="venue">
      <SectionCard>
        <div className="stack items-center">
          <Heading level={2}>Venue</Heading>
          <p className="text-center">
            <span className="font-bold">Bore Place</span>
            <span className="block">Bore Place Road </span>
            <span className="block">Chiddingstone</span>
            <span className="block">Edenbridge</span>
            <span className="block">TN8 7AR</span>
          </p>
          <a href="/">View on map</a>
        </div>
      </SectionCard>
    </Section>
  );
}
