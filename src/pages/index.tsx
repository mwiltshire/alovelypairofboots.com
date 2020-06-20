import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/home';
import { Info } from '../components/info';
import { Venue } from '../components/venue';
import { Timetable } from '../components/timetable';
import { Gifts } from '../components/gifts';
import { RSVP } from '../components/rsvp';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Home />
    <Info />
    <Venue />
    <Timetable />
    <Gifts />
    <RSVP />
  </Layout>
);

export default IndexPage;
