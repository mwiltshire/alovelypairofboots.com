import * as React from 'react';
import { Layout } from '../components/Layout';
import { Container } from '../components/Container';
import { Home } from '../sections/Home';
import { Venue } from '../sections/Venue';
import { Timetable } from '../sections/Timetable';
import { Info } from '../sections/Info';
import { Accommodation } from '../sections/Accommodation';
import { Registry } from '../sections/Registry';
import { Rsvp } from '../sections/Rsvp';

function Index() {
  return (
    <Layout>
      <Container>
        <Home />
        <Venue />
        <Timetable />
        <Info />
        <Accommodation />
        <Registry />
        <Rsvp />
      </Container>
    </Layout>
  );
}

export default Index;
