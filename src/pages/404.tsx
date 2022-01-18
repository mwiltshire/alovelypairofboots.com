import * as React from 'react';
import GatsbyLink from 'gatsby-link';

export default function NotFound() {
  return (
    <main className="flex items-center justify-center flex-col w-screen h-screen">
      <h1 className="text-9xl uppercase font-bold">Nein</h1>
      <p className="text-center text-lg">
        The site&rsquo;s back{' '}
        <GatsbyLink className="block underline underline-offset-4" to="/">
          <span
            role="img"
            aria-label="Backhand index finger pointing left emoji"
          >
            👈
          </span>{' '}
          thattaway
        </GatsbyLink>
      </p>
    </main>
  );
}
