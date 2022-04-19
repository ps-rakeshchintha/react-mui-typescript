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
    grayscale: Palette['primary'];
  }
  interface PaletteOptions {
    system: PaletteOptions['primary'];
    grayscale: PaletteOptions['primary'];
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
    gray600?: string;
    gray500?: string;
    gray400?: string;
    gray300?: string;
    gray200?: string;
    gray100?: string;
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
    gray600?: string;
    gray500?: string;
    gray400?: string;
    gray300?: string;
    gray200?: string;
    gray100?: string;
  }
}
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: false;
    md: true;
    lg: true;
    xl: true;
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
  breakpoints: {
    values: {
      xs: 0,
      md: 1024,
      lg: 1366,
      xl: 1920,
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        square: false
      },
      styleOverrides: {
        rounded: {
          borderRadius: '10px'
        },
        root: {
          overflow: "hidden"
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1248px'
        }
      }
    }
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontSize: 30,
      lineHeight: '35px',
      letterSpacing: 0
    },
    h2: {
      fontSize: 24,
      lineHeight: '35px',
      letterSpacing: 0
    },
    h3: {
      fontSize: 20,
      lineHeight: '24px',
      letterSpacing: 0
    },
    h4: {
      fontSize: 18,
      lineHeight: '24px',
      letterSpacing: 0
    },
    h5: undefined,
    h6: undefined,
    subtitle1: {
      fontSize: 16,
      lineHeight: '22px',
      letterSpacing: 0
    },
    subtitle2: undefined,
    body1: {
      fontSize: 14,
      lineHeight: '18px',
      letterSpacing: 0
    },
    body2: {
      fontSize: 12,
      lineHeight: '18px',
      letterSpacing: 0
    },
    body3: {
      fontSize: 10,
      lineHeight: '14px',
      letterSpacing: 0
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
      error: '#D9553D',
    },
    grayscale: {
      main: "#333333",
      gray500: "#cccccc",
      gray100: "#F7F7F7"
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
