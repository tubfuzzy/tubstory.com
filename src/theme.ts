import { createTheme } from '@mui/material/styles';

export enum THEME { 
    DARK = 'DARK', 
    LIGHT = 'LIGHT' 
}

export const darkTheme = createTheme({
    typography: {
      fontFamily: "'Inter', sans-serif"
    },
    palette: {
      warning: {
        main: '#ffcc12'
      },
      primary: {
        main: '#000000'
      },
      secondary: {
        main: '#f0f0f0'
      },
      text: {
        primary: '#f0f0f0', 
        secondary: '#1e1e1e',
        disabled: 'rgba(255, 255, 255, 0.5)'
      },
      action: {
        active: '#fff',
        hover: 'rgba(255, 255, 255, 0.08)',
        selected: 'rgba(255, 255, 255, 0.16)',
        disabled: 'rgba(255, 255, 255, 0.3)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)'
      },
      background: {
        default: '#000000',
        paper: '#000000'
      },
      divider: 'rgba(255, 255, 255, 0.12)'
    }
  });
  
  export const lightTheme = createTheme({
    typography: {
      fontFamily: "'Poppins', sans-serif"
    },
    palette: {
      warning: {
        main: '#FFBE12'
      },
      primary: {
        main: '#F8F8F7' 
      },
      secondary: {
        main: '#000000'
      },
      text: {
        primary: '#040403', 
        secondary: '#707070',
        disabled: 'rgba(0, 0, 0, 0.38)'
      },
      action: {
        active: 'rgba(0, 0, 0, 0.54)',
        hover: 'rgba(0, 0, 0, 0.04)',
        selected: 'rgba(0, 0, 0, 0.08)',
        disabled: 'rgba(0, 0, 0, 0.26)',
        disabledBackground: 'rgba(0, 0, 0, 0.12)'
      },
      background: {
        default: '#FFFFFF', 
        paper: '#FFFFFF' 
      },
      divider: 'rgba(0, 0, 0, 0.12)'
    },
  });