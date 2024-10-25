import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();

const font1 = '"Kaushan Script", "serif"';
const font2 = '"Roboto", "Open Sans", "sans-serif"';

const theme = createTheme({
  palette: {
    primary: {
      main: '#417EDA',
      light: '#74A6F0',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#203142',
      contrastText: '#FFFFFF'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960, // 60px larger than default, to increase containers' size
      lg: 1200,
      xl: 1536
    }
  },
  typography: {
    h1: {
      fontFamily: font2,
      fontSize: 48,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '70px',
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: 32,
        lineHeight: '46px'
      }
    },
    h2: {
      fontFamily: font2,
      fontSize: 40,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: 1.15,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: 28
      }
    },
    h4: {
      fontFamily: font1,
      fontSize: 30,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '44px',
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: 18,
        lineHeight: '26px'
      }
    },
    h6: {
      fontFamily: font1,
      fontSize: 24,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: 1.15
    },
    subtitle1: {
      fontFamily: font2,
      fontSize: 12,
      lineHeight: '14px'
    },
    subtitle2: {
      fontFamily: font2,
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '14px',
      textTransform: 'uppercase'
    },
    body1: {
      fontFamily: font2,
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '19px'
    },
    body2: {
      fontFamily: font2,
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '16px'
    },
    button: {
      fontFamily: font2,
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: '14px',
      textTransform: 'uppercase'
    }
  },
  components: {
    RaImageField: {
      styleOverrides: {
        image: {
          width: '100%',
          margin: 0,
          maxHeight: 200,
          objectFit: 'cover'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: 2,
          padding: 12,
          minWidth: 100
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        message: {
          paddingTop: 11
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 8,
          paddingRight: 0
        }
      }
    }
  }
});

export default theme;
