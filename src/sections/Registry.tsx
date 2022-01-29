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
            Kent. Your presence means the world to us and is all we ask for. If
            you’d still like to give us a gift, a contribution to our honeymoon
            funds would be lovely.
          </p>
          <p className="text-gray">Registry to follow</p>
          {/* <a
            className="btn"
            href="https://prezola.com/wishlists/10205845/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://static.prezola.com/staticfiles/img/black_logo.svg"
              alt="Prezola logo"
            />
          </a> */}
        </div>
      </SectionCard>
    </Section>
  );
}
