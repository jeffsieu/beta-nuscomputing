import React, { PropsWithChildren } from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import useDarkMode from 'use-dark-mode';

import SEO from './seo'
import TopBar from './top-bar'
import Footer from './footer'
import { Box, Container, CssBaseline, Toolbar, useMediaQuery } from '@material-ui/core'
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Property } from 'csstype'
import { useMemo } from 'react';


type BaseContainerProps = {
  background?: IGatsbyImageData,
  backgroundPosition?: Property.ObjectPosition<string | number>,
  disableWrapper?: boolean,
  title: string,
  meta?: any[],
};

const BaseContainer: React.FC<BaseContainerProps> = (props) => {
  // const darkMode = useDarkMode(false);
  const darkMode = {
    value: useMediaQuery('(prefers-color-scheme: dark)')
  };
  const theme = useMemo(() => createTheme({
    palette: {
      type: darkMode.value ? 'dark' : 'light',
      primary: {
        main: darkMode.value ? '#8e9df0' : '#27378f',
      },
      secondary: {
        main: '#f44336',
      },
      background: {
        default: darkMode.value ? '#121212' : '#fff', 
      },
      contrastThreshold: 3,
    },
    typography: {
      allVariants: {
        color: darkMode.value ? 'white' : undefined,
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
  }), [darkMode]);

  console.log(theme);

  const InnerContainer: React.FC<PropsWithChildren<{}>> = (props) => {
    const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
    return <Container fixed maxWidth={lgDown ? 'md' : 'lg'} {...props}>
    </Container>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SEO {...props} />
      <TopBar transparent={props.background != null} />
      <Toolbar />
      {
        props.background &&
        <GatsbyImage
          alt="Background image"
          image={props.background}
          style={{ marginTop: '-68px', maxHeight: '50vh', minHeight: '25vh' }}
          imgStyle={{ objectFit: 'cover', objectPosition: props.backgroundPosition ?? '50% 50%' }} />
      }
      <Box py={8}>
        {
          props.disableWrapper
            ? props.children
            : <InnerContainer>
              {/* {props.background} */}
              {/* {JSON.stringify(props)} */}
              {props.children}
            </InnerContainer>
        }
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export { BaseContainer as default }