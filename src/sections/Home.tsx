import * as React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Heading } from '../components/Heading';
import { Box } from '../components/Box';
import { LinkButton } from '../components/LinkButton';
import { Stack } from '../components/Stack';
import styled from 'styled-components';
import { Flower1 } from '../components/Flower1';
import { Flower2 } from '../components/Flower2';
import { createScrollTo } from '../utils/scrollTo';

const scrollTo = createScrollTo();

export function Home() {
  return (
    <StyledSection id="home">
      <Card>
        <Flower1Wrapper position="absolute">
          <Flower1 />
        </Flower1Wrapper>
        <Flower2Wrapper position="absolute">
          <Flower2 />
        </Flower2Wrapper>
        <Stack align="center" gap="2rem">
          <Heading level={1} textAlign="center">
            <Box fontSize="4rem" as="span" display="block" marginBottom="1rem">
              Shauna & Chris
            </Box>{' '}
            are getting married on <br />
            Tuesday 23rd August 2022
          </Heading>
          <LinkButton
            href="#rsvp"
            onClick={e => {
              e.preventDefault();
              scrollTo('#rsvp');
            }}
          >
            RSVP
          </LinkButton>
        </Stack>
      </Card>
    </StyledSection>
  );
}

const StyledSection = styled(Section)`
  margin-top: -4rem;
`;

const Flower1Wrapper = styled(Box)`
  z-index: -1;
  top: -50%;
  left: 0;
  @media (min-width: 1024px) {
    left: -30%;
  }
`;

const Flower2Wrapper = styled(Box)`
  z-index: -1;
  bottom: -50%;
  right: 0;
  @media (min-width: 1024px) {
    right: -30%;
  }
`;
