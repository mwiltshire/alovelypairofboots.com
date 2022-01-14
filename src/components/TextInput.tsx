import * as React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { Box } from './Box';

interface TextInputProps {
  validationError?: string;
}

export const TextInput = React.forwardRef<
  HTMLInputElement,
  // eslint-disable-next-line @typescript-eslint/ban-types
  StyledComponentProps<'input', any, {}, never> & TextInputProps
>(({ validationError, ...rest }, ref) => {
  return (
    <Box position="relative">
      <StyledTextInput
        type="text"
        ref={ref}
        invalid={Boolean(validationError)}
        {...rest}
      />
      {validationError && (
        <Box
          position="absolute"
          right="0"
          p="0.15rem 0.25rem"
          color="var(--white)"
          backgroundColor="var(--red)"
        >
          {validationError}
        </Box>
      )}
    </Box>
  );
});

const StyledTextInput = styled.input<{ invalid: boolean }>`
  width: 100%;
  outline: none;
  padding: 0.5rem;
  margin: 0;
  font-family: inherit;
  font-size: 0.85rem;
  border: 1px solid
    ${({ invalid }) => (invalid ? 'var(--red)' : 'var(--black)')};
  &::placeholder {
    color: var(--gray);
  }
`;
