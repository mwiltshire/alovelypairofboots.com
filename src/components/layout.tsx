import React, { FC } from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Header from './header';
import Container from './container';
import { globalStyles } from '../global-styles';
import { BP_MIN_MD } from '../breakpoints';
import { theme } from '../theme';

import 'typeface-raleway';
import 'typeface-great-vibes';

const Layout: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Header />
      <div>
        <main
          css={css`
            margin: 0 5px;
            ${BP_MIN_MD} {
              margin: 0 15px;
            }
          `}
        >
          {children}
        </main>
        <footer
          css={css`
            display: flex;
            align-items: center;
            height: 3rem;
            font-size: ${theme.fontSizes.xs};
            text-align: center;
          `}
        >
          <Container>© {new Date().getFullYear()}, Not Paramount</Container>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
