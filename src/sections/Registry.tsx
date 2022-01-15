import * as React from 'react';
import { Section } from '../components/Section';
import { SectionCard } from '../components/SectionCard';
import { Heading } from '../components/Heading';

export function Registry() {
  return (
    <Section id="registry">
      <SectionCard>
        <div className="stack items-center">
          <Heading level={2}>Registry</Heading>
          <p>
            Many of you are traveling across the globe to celebrate with us in
            Kent, so your presence means the world to us and is all we ask for.
            If you’d still like to contribute to our registry or honeymoon
            funds, please select from the options below.
          </p>
          <a
            className="btn"
            href="https://prezola.com/wishlists/10205845/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://static.prezola.com/staticfiles/img/black_logo.svg"
              alt="Prezola logo"
            />
          </a>
        </div>
      </SectionCard>
    </Section>
  );
}
