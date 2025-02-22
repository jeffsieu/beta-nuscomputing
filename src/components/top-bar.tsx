import React, { PropsWithChildren } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import SmallLogo from './small-logo'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';

import { Box, Drawer, List, IconButton, ListItem, ListItemText, Hidden, Tooltip, ListItemIcon, Divider } from '@material-ui/core'
import { useState } from 'react';
import { ReactElement } from 'react';
import DarkBrightness from '@material-ui/icons/Brightness4';
import LightBrightness from '@material-ui/icons/Brightness7';
import ThemeBrightnessContext from '../../plugins/gatsby-plugin-top-layout/ThemeBrightnessContext'
import { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: theme.palette.type == 'light' ? '#ffffff' : '#121212',
  },
  appBarTransparent: {
    background: theme.palette.type == 'light' ? '#ffffffbb' : '#121212bb',
    transition: 'background 0.3s',
    backdropFilter: 'blur(10px)',
  },
  elevated: {
    '& > div': {
      background: theme.palette.type == 'dark' ? '#333333bb' : null,
    },
  },
  spacer: {
    flexGrow: 1,
  },
  links: {
    fontFamily: 'Kumbh Sans, sans-serif',
    outline: 'none',
    '& > a': {
      marginRight: theme.spacing(4),
    },
  },
  highlightedLink: {
    fontWeight: 'bold',
  },
  computingClub: {
    marginLeft: '8px',
    fontFamily: 'Memphis LT Std !important',
    color: theme.palette.primary.main,
    lineHeight: 1,
    '& *': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
  },
  drawer: {
    minWidth: '256px',
  },
  drawerBackground: {
    background: theme.palette.type == 'light' ? '#ffffffbb' : '#121212bb',
    backdropFilter: 'blur(10px)',
  }
}));

type ElevationScrollProps = {
  children: ReactElement,
}

const ElevationScroll: React.FC<ElevationScrollProps> = function ({ children }) {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    className: trigger ? classes.elevated : '',
  });
}

type NavigationLink = {
  title: string,
  link: string,
  highlight?: boolean,
  newTab?: boolean,
}

const navigationLinks: NavigationLink[] = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'People',
    link: '/people',
  },
  {
    title: 'Services',
    link: '/services',
  },
  {
    title: 'Student Guides',
    link: '/guides',
  },
  {
    title: 'FOP',
    link: '/freshmen',
    highlight: true,
  },
  {
    title: 'Photos/Media',
    link: 'https://www.flickr.com/photos/137141057@N04/albums/',
    newTab: true,
  },
]

type TopBarProps = {
  transparent: boolean,
}

const TopBar: React.FC<TopBarProps> = function ({ transparent = false }) {
  const classes = useStyles();
  const theme = useTheme();
  const { isDark, toggleBrightness } = useContext(ThemeBrightnessContext);

  const isXxs = useMediaQuery('(max-width:400px)');
  const mdDown = useMediaQuery(theme.breakpoints.down('sm'));

  // Media Queries are computed separatedly to ensure that both hooks are always called
  const isLessThan1170 = useMediaQuery('(max-width:1170px)');
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const hideComputingLogo = isLessThan1170 && mdUp;

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const ToggleThemeIcon = () => isDark ? <LightBrightness /> : <DarkBrightness />;

  const ToggleThemeButton = () => <Tooltip title="Toggle light/dark theme" aria-label="toggle theme">
    <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => toggleBrightness()}>
      <ToggleThemeIcon />
    </IconButton>
  </Tooltip>;

  return (
    <header>
      <ElevationScroll>
        <AppBar color='transparent'>
          <Toolbar className={`${classes.root} ${classes.appBarTransparent}`}>
            <GatsbyLink to="/">
              <SmallLogo></SmallLogo>
            </GatsbyLink>
            {transparent}
            <div className={classes.spacer}>
              <Hidden mdDown>
                <Typography variant='h6' className={classes.computingClub}>
                  <GatsbyLink to='/'>NUS Students' Computing Club</GatsbyLink>
                </Typography>
              </Hidden>
              <Hidden xsDown lgUp>
                <Typography variant='h6' className={classes.computingClub}>
                  {!hideComputingLogo ? <GatsbyLink to='/'>
                    NUS Students'<br />
                    Computing Club
                  </GatsbyLink> : null}
                </Typography>
              </Hidden>
              <Hidden smUp>
                <Typography variant='subtitle1' className={classes.computingClub}>
                  {!isXxs ? <GatsbyLink to='/'>
                    NUS Students'<br />
                    Computing Club
                  </GatsbyLink> : null}
                </Typography>
              </Hidden>
            </div>
            <Hidden smDown>
              <div style={{ color: 'white', verticalAlign: 'middle', display: 'table-cell' }} className={classes.links}>
                {
                  navigationLinks.map(link =>
                    <Link
                      style={{ paddingTop: '12px', paddingBottom: '12px', verticalAlign: 'text-top' }}
                      key={link.title}
                      className={link.highlight ? classes.highlightedLink : ''}
                      href={link.link}
                      target={link.newTab ? '_blank' : '_self'}
                      rel={link.newTab ? 'noreferrer' : ''}
                    >{link.title}
                    </Link>
                  )}
                <ToggleThemeButton></ToggleThemeButton>
              </div>
            </Hidden>
            {/* <Button variant='contained' color='primary' component={GatsbyLink} to='/recruitment'>Recruitment</Button> */}
            <Hidden mdUp>
              <Box ml={1}>
                <IconButton edge="end" color="primary" aria-label="menu" onClick={toggleDrawer(true)}>
                  <MenuIcon />
                </IconButton>
              </Box>
            </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      {/* Drawer for mobile */}
      <React.Fragment>
        <Drawer classes={{ paper: classes.drawerBackground }} anchor='right' open={isDrawerOpen && mdDown} onClose={toggleDrawer(false)}>
          <Box
            pt={4}>
            <nav
              className={classes.drawer}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}>
              <List>
                <Box mb={4} ml={4}>
                  <ListItem>
                    <ListItemText disableTypography>
                      <Typography variant='h5' className={classes.computingClub}>
                        <GatsbyLink to='/'>NUS Students'<br />Computing Club</GatsbyLink>
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </Box>
                {navigationLinks.map(link => (
                  <ListItem key={link.title} button component='a' href={link.link} target={link.newTab ? '_blank' : '_self'} rel={link.newTab ? 'noreferrer' : ''}>
                    <ListItemText disableTypography>
                      <Box pl={0}>
                        <Typography
                          color='primary'
                          className={link.highlight ? classes.highlightedLink : ''}
                          variant='h6'
                        >
                          {link.title}
                        </Typography>
                      </Box>
                    </ListItemText>
                  </ListItem>
                ))}
                <Divider></Divider>
                <ListItem key={'toggle theme button'} button component='a' onClick={() => toggleBrightness()}>
                  <ListItemText disableTypography>
                      <Typography color='textSecondary' variant='h6' component='span'>
                        Toggle theme
                      </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Drawer>
      </React.Fragment>
    </header>
  );
}

export default TopBar