import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from '../components/LoadingScreen';
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components/Layout';
import { Container } from '../components/Container';
import { Home } from '../sections/Home';
import { Venue } from '../sections/Venue';
import { Timings } from '../sections/Timings';
import { Info } from '../sections/Info';
import { Accommodation } from '../sections/Accommodation';
import { Registry } from '../sections/Registry';
import { Rsvp } from '../sections/Rsvp';
import { Flower3 } from '../components/Flower3';
import { Flower4 } from '../components/Flower4';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>
      {!isLoading && (
        <Layout>
          <Toaster
            position="bottom-left"
            toastOptions={{
              duration: 4000,
              success: {
                iconTheme: {
                  primary: 'var(--green)',
                  secondary: 'var(--white)'
                }
              },
              error: {
                iconTheme: { primary: 'var(--red)', secondary: 'var(--white)' },
                style: {
                  color: 'var(--red)'
                }
              },
              style: {
                padding: '1rem',
                borderRadius: '0px',
                backgroundColor: 'var(--white)'
              }
            }}
          />
          <Container>
            <Home />
            <Venue />
            <div className="h-16 md:hidden">
              <Flower3 />
            </div>
            <Timings />
            <div className="h-16 md:hidden">
              <Flower4 />
            </div>
            <Info />
            <div className="h-16 md:hidden">
              <Flower3 />
            </div>
            <Accommodation />
            <div className="h-16 md:hidden">
              <Flower4 />
            </div>
            <Registry />
            <div className="h-16 md:hidden">
              <Flower3 />
            </div>
            <Rsvp />
          </Container>
        </Layout>
      )}
      {/* This is just for Netlify */}
      <form name="contact" data-netlify="true" hidden>
        <input type="hidden" name="name" />
        <input type="hidden" name="email" />
        <input type="hidden" name="rsvp" />
        <input type="hidden" name="dietaryRequirements" />
        <input type="hidden" name="dietaryRequirementsDescription" />
        <input type="hidden" name="comments" />
      </form>
      {/* This is just for Netlify */}
    </>
  );
}
