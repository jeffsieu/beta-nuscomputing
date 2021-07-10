import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import useDarkMode from 'use-dark-mode';
import { createTheme, useMediaQuery } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import ThemeBrightnessContext from './ThemeBrightnessContext';


export default function MaterialThemeProvider({ children, storageBrightness }) {
  // const darkMode = useDarkMode();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const preferredBrightness = prefersDarkMode ? 'dark' : 'light';

  const [brightness, setBrightness] = useState(storageBrightness === 'dark' || storageBrightness === 'light' ? storageBrightness : preferredBrightness);
  const isDark = brightness === 'dark';
  
  const toggleBrightness = () => {
    const targetBrightness = brightness === 'light' ? 'dark' : 'light';
		localStorage.setItem('themeBrightness', targetBrightness);
    console.log("yo");
		setBrightness(targetBrightness);
	};
  
  const theme = useMemo(() => createTheme({
    palette: {
      type: brightness,
      primary: {
        main: isDark ? '#8e9df0' : '#27378f',
      },
      secondary: {
        main: '#f44336',
      },
      background: {
        default: isDark ? '#121212' : '#fff', 
      },
      contrastThreshold: 3,
    },
    typography: {
      allVariants: {
        color: isDark ? 'white' : undefined,
      },
      fontFamily: [
        'Kumbh Sans',
        'sans-serif',
      ].join(','),
      body1: {
        fontFamily: [
          'Raleway',
          'sans-serif',
        ].join(','),
      },
      body2: {
        fontFamily: [
          'Raleway',
          'sans-serif',
        ].join(','),
      },
    },
    breakpoints: createBreakpoints({
      values: {
        xs: 0,
        sm: 600,
        md: 1000,
        lg: 1350,
        xl: 1920,
      },
    }),
  }), [brightness]);

  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeBrightnessContext.Provider value={{
          isDark: isDark,
          toggleBrightness: toggleBrightness,
        }}>
          {children}
        </ThemeBrightnessContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MaterialThemeProvider.propTypes = {
  children: PropTypes.node,
  brightness: PropTypes.string.isRequired,
};