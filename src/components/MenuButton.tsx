import * as React from 'react';
import styled from 'styled-components';

interface MenuButtonProps {
  onClick: () => void;
}

export function MenuButton({ onClick }: MenuButtonProps) {
  return <StyledButton onClick={onClick}>Menu</StyledButton>;
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  background: none;
  border: none;
  outline: none;
  font-family: 'Amatic SC', sans-serif;
  font-size: inherit;
  @media (min-width: 1024px) {
    display: none;
  }
`;
