export interface Theme {
  colors: {
    white: string;
    black: string;
    richBlack: string;
    gray100: string;
    gray200: string;
    gray300: string;
    green100: string;
    green200: string;
    green300: string;
    red100: string;
    red200: string;
    red300: string;
    turqoise: string;
  };
  fontSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
    '7xl': string;
  };
  fontWeights: {
    normal: number;
    bold: number;
  };
}

export const theme: Theme = {
  colors: {
    white: '#fff',
    black: '#000',
    richBlack: '#171717',
    gray100: '#bfbfbf',
    gray200: '#f0f0f0',
    gray300: '#343232',
    green100: '#effbf0',
    green200: '#3cc1a1',
    green300: '#067559',
    red100: '#ffe9e9',
    red200: '#da6969',
    red300: '#ae4335',
    turqoise: '#cbf3f2'
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
    '7xl': '5rem'
  },
  fontWeights: {
    normal: 500,
    bold: 700
  }
};
