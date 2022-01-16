import * as React from 'react';
import { Card } from '../components/Card';
import { Flower3 } from '../components/Flower3';
import { Flower4 } from '../components/Flower4';

interface SectionCardProps {
  children: React.ReactNode;
}

export function SectionCard({ children }: SectionCardProps) {
  return (
    <Card>
      <div className="absolute hidden md:block h-28 top-[-54px] left-[-59px]">
        <Flower3 />
      </div>
      <div className="absolute hidden md:block h-28 bottom-[-61px] right-[-51px]">
        <Flower4 />
      </div>
      {children}
    </Card>
  );
}
