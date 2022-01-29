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
            <span className="block">Bore Place</span>
            <span className="block">Bore Place Road </span>
            <span className="block">Chiddingstone</span>
            <span className="block">Edenbridge</span>
            <span className="block">TN8 7AR</span>
          </p>
          <div className="stack-row">
            <a
              className="underline decoration-green decoration-4 underline-offset-4"
              href="https://goo.gl/maps/xofswiFU52jGAkxa9"
              target="_blank"
              rel="noreferrer"
            >
              View on map
            </a>
            <a
              className="underline decoration-green decoration-4 underline-offset-4"
              href="https://www.boreplace.org/_uploads/documents/general/DirectionstoBorePlaceTN87AR.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Directions
            </a>
          </div>
        </div>
      </SectionCard>
    </Section>
  );
}
