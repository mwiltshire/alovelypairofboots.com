import * as React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit';
}

export function Button({ children, type = 'button' }: ButtonProps) {
  return <StyledButton type={type}>{children}</StyledButton>;
}

export const buttonStyles = `
  border: 1px solid var(--black);
  cursor: pointer;
  text-decoration: none;
  background-color: var(--white);
  width: fit-content;
  padding: 0.75rem 2rem;
  transition: box-shadow 250ms ease;
  &:hover {
    box-shadow: 3px 3px 0px var(--green);
  }
`;

const StyledButton = styled.button`
  ${buttonStyles}
  font-family: inherit;
  font-weight: inherit;
`;
