import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }

  interface Palette {
    system: Palette['primary'];
  }
  interface PaletteOptions {
    system: PaletteOptions['primary'];
  }
  
  interface PaletteColor {
    white?: string;
    gray?: string;
    coolGray?: string;
    skyBlue?: string;
    midnightBlue?: string;
    teal?: string;
    purple?: string;
    lavender?: string;
    selago?: string;
    lightCyan?: string;
    marineBlueLight?: string;
    marineBlue?: string;
    mossGreen?: string;
    grassGreen?: string;
    backgroundGray?: string;
    error?: string;
  }
  interface SimplePaletteColorOptions {
    white?: string;
    gray?: string;
    coolGray?: string;
    skyBlue?: string;
    midnightBlue?: string;
    teal?: string;
    purple?: string;
    lavender?: string;
    selago?: string;
    lightCyan?: string;
    marineBlueLight?: string;
    marineBlue?: string;
    mossGreen?: string;
    grassGreen?: string;
    backgroundGray?: string;
    error?: string;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    subtitle2: false;
    h5: false;
    h6: false;
  }
}

// A custom theme for this app
const theme = createTheme({
  spacing: 6,
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontSize: 30,
      lineHeight: '35px'
    },
    h2: {
      fontSize: 24,
      lineHeight: '35px'
    },
    h3: {
      fontSize: 20,
      lineHeight: '24px'
    },
    h4: {
      fontSize: 18,
      lineHeight: '24px'
    },
    h5: undefined,
    h6: undefined,
    subtitle1: {
      fontSize: 16,
      lineHeight: '22px'
    },
    subtitle2: undefined,
    body1: {
      fontSize: 14,
      lineHeight: '18px'
    },
    body2: {
      fontSize: 12,
      lineHeight: '18px'
    },
    body3: {
      fontSize: 10,
      lineHeight: '14px'
    }
  },
  palette: {
    system: {
      main: '#ffffff',
      white: '#ffffff',
      backgroundGray: '#F5F5F5',
      coolGray: '#75787B',
      skyBlue: '#0098DB',
      midnightBlue: '#003C69',
      teal: '#008B95',
      purple: '#6639B7',
      lavender: '#AC98DB',
      selago: '#F3EFFE',
      lightCyan: '#5EB6E4',
      marineBlueLight: '#7FCBED',
      marineBlue: '#005BBB',
      mossGreen: '#7AB800',
      grassGreen: '#34B233',
      gray: '#333333',
      error: '#D9553D'
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
