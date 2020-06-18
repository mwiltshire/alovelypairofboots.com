import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/home';
import { Info } from '../components/info';
import { Venue } from '../components/venue';
import { Timetable } from '../components/timetable';
import Gear from '../components/gear';
import About from '../components/about';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Home />
    <Info />
    <Venue />
    <Timetable />
    <About />
    <Contact />
  </Layout>
);

export default IndexPage;
