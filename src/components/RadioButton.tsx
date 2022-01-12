import * as React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { Box } from './Box';

export const RadioButton = React.forwardRef<
  HTMLInputElement,
  // eslint-disable-next-line @typescript-eslint/ban-types
  StyledComponentProps<'input', any, {}, never>
>((props, ref) => {
  return (
    <Box position="relative">
      <RadioButtonOuter>
        {props.checked && <RadioButtonInner />}
      </RadioButtonOuter>
      <StyledInput ref={ref} type="radio" {...props} />
    </Box>
  );
});

const RadioButtonOuter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 1.3rem;
  width: 1.3rem;
  border: 1px solid var(--black);
  margin-right: 0.25rem;
`;

const RadioButtonInner = styled.span`
  border-radius: 50%;
  height: 90%;
  width: 90%;
  background-color: var(--green);
`;

const StyledInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  height: 1.3rem;
  width: 1.3rem;
  opacity: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
