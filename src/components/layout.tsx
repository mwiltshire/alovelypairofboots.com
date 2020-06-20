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
import 'typeface-butler';
import 'typeface-cooper-hewitt';

const Layout: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Header />
      <div>
        <main css={css('margin: 0 2vmin;')}>{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
