import * as React from 'react';
import styled from 'styled-components';

interface LabelProps {
  children: React.ReactNode;
  inline?: boolean;
}

export function Label({ children, inline = false }: LabelProps) {
  return <StyledLabel inline={inline}>{children}</StyledLabel>;
}

export const StyledLabel = styled.label<{ inline: boolean }>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'block')};
  align-items: center;
  font-weight: 700;
  font-size: 0.75rem;
  cursor: pointer;
`;
