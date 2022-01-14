import styled from 'styled-components';

export const Textarea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 0.5rem;
  margin: 0;
  resize: none;
  min-height: 5rem;
  font-family: inherit;
  font-size: 0.85rem;
  border: 1px solid var(--black);
  line-height: inherit;
  &::placeholder {
    color: var(--gray);
  }
`;
