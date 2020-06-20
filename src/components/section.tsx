import React, { FC } from 'react';
import { css, SerializedStyles } from '@emotion/core';
import Container from './container';

type SectionProps = {
  id: string;
  styles?: SerializedStyles;
};

export const Section: FC<SectionProps> = ({ id, styles, children }) => {
  return (
    <section
      id={id}
      css={css`
        position: relative;
        display: flex;
        align-items: center;
        min-height: calc(100vh - 3rem);
        padding: 4rem 0;
        ${styles}
      `}
    >
      <Container constrain>{children}</Container>
    </section>
  );
};
