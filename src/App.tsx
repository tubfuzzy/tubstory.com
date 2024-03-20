import React, { useState } from 'react';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Content from './components/Content';
import { lightTheme, darkTheme, THEME } from './theme';
import './App.css'


const App: React.FC = () => {
  const [theme, settheme] = useState(THEME.DARK);

  return (
    <ThemeProvider theme={responsiveFontSizes(theme === THEME.DARK ? darkTheme : lightTheme)}>
      <CssBaseline />
      <div>
        <Header settheme={settheme} />
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default App;