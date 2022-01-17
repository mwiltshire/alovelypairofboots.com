import * as React from 'react';
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components/Layout';
import { Container } from '../components/Container';
import { Home } from '../sections/Home';
import { Venue } from '../sections/Venue';
import { Timetable } from '../sections/Timetable';
import { Info } from '../sections/Info';
import { Accommodation } from '../sections/Accommodation';
import { Registry } from '../sections/Registry';
import { Rsvp } from '../sections/Rsvp';
import { Flower3 } from '../components/Flower3';
import { Flower4 } from '../components/Flower4';

function Index() {
  return (
    <Layout>
      <Toaster
        position="bottom-left"
        toastOptions={{
          className: 'w-screen md:w-auto',
          duration: 4000,
          success: {
            iconTheme: { primary: 'var(--green)', secondary: 'var(--white)' }
          },
          error: {
            iconTheme: { primary: 'var(--red)', secondary: 'var(--white)' }
          },
          style: {
            padding: '1rem',
            background: 'var(--white)',
            borderRadius: 0
          }
        }}
      />
      <Container>
        <Home />
        <Venue />
        <div className="h-16 md:hidden">
          <Flower3 />
        </div>
        <Timetable />
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
  );
}

export default Index;
