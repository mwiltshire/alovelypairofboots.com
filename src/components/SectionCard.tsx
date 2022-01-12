import * as React from 'react';
import styled from 'styled-components';
import { Card } from '../components/Card';
import { Flower3 } from '../components/Flower3';
import { Flower4 } from '../components/Flower4';
import { Box } from '../components/Box';

interface SectionCardProps {
  children: React.ReactNode;
}

export function SectionCard({ children }: SectionCardProps) {
  return (
    <Card>
      <Flower3Wrapper position="absolute">
        <Flower3 />
      </Flower3Wrapper>
      <Flower4Wrapper position="absolute">
        <Flower4 />
      </Flower4Wrapper>
      {children}
    </Card>
  );
}

const Flower3Wrapper = styled(Box)`
  top: -54px;
  left: -59px;
`;

const Flower4Wrapper = styled(Box)`
  bottom: -61px;
  right: -51px;
`;
