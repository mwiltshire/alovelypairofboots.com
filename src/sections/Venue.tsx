import * as React from 'react';
import { Section } from '../components/Section';
import { SectionCard } from '../components/SectionCard';
import { Heading } from '../components/Heading';
import { Box } from '../components/Box';
import { Stack } from '../components/Stack';
import styled from 'styled-components';

export function Venue() {
  return (
    <Section id="venue">
      <SectionCard>
        <Stack align="center">
          <Heading level={2}>Venue</Heading>
          <Box as="p">Bore Place</Box>
          <Box as="p" textAlign="center">
            <AddressLine>Bore Place Road </AddressLine>
            <AddressLine>Chiddingstone</AddressLine>
            <AddressLine>Edenbridge</AddressLine>
            <AddressLine>TN8 7AR</AddressLine>
          </Box>
          <Box as="a">View on map</Box>
        </Stack>
      </SectionCard>
    </Section>
  );
}

const AddressLine = styled.span`
  display: block;
`;
