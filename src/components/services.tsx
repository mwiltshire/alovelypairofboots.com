import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Container from './container';
import { Row, Col } from './grid';
import Section from './section';
import CTALink from './cta-link';
import { Theme } from './layout';

const Services = () => {
  const theme = useTheme<Theme>();
  return (
    <Section id="services" heading="Services">
      <div
        css={css`
          & h3 {
            font-size: ${theme.fontSizes['4xl']};
          }
          & h4 {
            font-size: ${theme.fontSizes['2xl']};
          }
        `}
      >
        <Container>
          <Row>
            <Col lg={4}>
              <div
                css={css`
                  margin-bottom: 2rem;
                `}
              >
                <h3>Drum recording and audio production</h3>
                <p>
                  Not Paramount is the result of needing two main roles from a
                  modest space. The studio was designed to spec, with one half
                  acoustically treated as a neutral position for mixing,
                  mastering, podcast editing and more, and the other as an open
                  space for recording live drum tracks.
                </p>
                <CTALink to="#contact">Let&apos;s talk</CTALink>
              </div>
            </Col>
            <Col lg={7} lgOffset={1}>
              <Row>
                <Col sm={6}>
                  <h4>Drum tracking</h4>
                  <p>
                    Delivering drum stems at your preferred sample rate/bit
                    depth. I can use any combination of drums and microphones
                    provided to get the right sound for your music at a
                    competitive price-point.
                  </p>
                </Col>
                <Col sm={6}>
                  <h4>Production</h4>
                  <p>
                    Utilising years of production experience and the various
                    gear at NP Studio I can help you craft a product; whether
                    it???s a single, EP or full length album, we can discuss
                    options.
                  </p>
                </Col>
                <Col sm={6}>
                  <h4>Mixing/Mastering</h4>
                  <p>
                    Mixing services can either be on a song by song basis, an EP
                    or a full length album. Mastering services are available
                    too, to get your tracks ready for release. Sending
                    references is always helpful.
                  </p>
                </Col>
                <Col sm={6}>
                  <h4>Podcast editing</h4>
                  <p>
                    Whether it???s just working through existing audio to get rid
                    of unwanted noise or starting from scratch to record and
                    arrange an entire podcast there is a fully sound proofed
                    room here and some detailed microphones to choose from.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </Section>
  );
};

export default Services;
