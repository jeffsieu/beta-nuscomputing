import React, { PropsWithChildren } from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import useDarkMode from 'use-dark-mode';

import SEO from './seo'
import TopBar from './top-bar'
import Footer from './footer'
import { Box, Container, CssBaseline, Toolbar, useMediaQuery, useTheme } from '@material-ui/core'
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
  const theme = useTheme();

  const InnerContainer: React.FC<PropsWithChildren<{}>> = (props) => {
    const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
    return <Container fixed maxWidth={lgDown ? 'md' : 'lg'} {...props}>
    </Container>;
  }

  return (
    <div>
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
    </div>
  );
}

export { BaseContainer as default }