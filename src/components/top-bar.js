import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import SmallLogo from './small-logo'
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';

import { Box, Drawer, List, IconButton, ListItem, Button, ListItemText, Hidden } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: 'white',
  },
  spacer: {
    flexGrow: 1,
  },
  links: {
    fontFamily: 'Kumbh Sans, sans-serif',
    outline: 'none',
    '& > *': {
      marginRight: theme.spacing(4),
    },
    '& a': {
    }
  },
  computingClub: {
    marginLeft: '8px',
    fontFamily: 'Memphis LT Std !important',
    color: '#27378f',
    lineHeight: 1,
    '& *': {
      color: '#27378f',
      textDecoration: 'none',
    },
  },
  drawer: {
    minWidth: '256px',
  }
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const navigationLinks = [
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
  // {
  //   title: 'FOP',
  //   link: 'https://freshmen.nuscomputing.com/',
  //   newTab: true,
  // },
  {
    title: 'Photos/Media',
    link: 'https://www.flickr.com/photos/137141057@N04/albums/',
    newTab: true,
  },
  
]

function TopBar(props) {
  const classes = useStyles();
  const xxs = useMediaQuery('(max-width:400px)');
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('sm'));
  const hideComputingLogo = useMediaQuery('(max-width:1170px)') * useMediaQuery(theme.breakpoints.up('md'));
  const [state, setState] = React.useState({
    opened: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <header>
      <ElevationScroll {...props}>
        <AppBar className={classes.root}>
          <Toolbar className={classes.appBar}>
            <GatsbyLink to="/">
              <SmallLogo></SmallLogo>
            </GatsbyLink>
            <div className={classes.spacer}>
              <Hidden mdDown>
                <Typography variant='h6' className={classes.computingClub}>
                  <GatsbyLink to='/'>NUS Students' Computing Club</GatsbyLink>
                </Typography>
              </Hidden>
              <Hidden xsDown lgUp>
                <Typography variant='h6' className={classes.computingClub}>
                  {!hideComputingLogo ? <GatsbyLink to='/'>
                    NUS Students'<br/>
                    Computing Club
                  </GatsbyLink> : null}
                </Typography>
              </Hidden>
              <Hidden smUp>
                <Typography variant='subtitle1' className={classes.computingClub}>
                  {!xxs ? <GatsbyLink to='/'>
                    NUS Students'<br/>
                    Computing Club
                  </GatsbyLink> : null}
                </Typography>
              </Hidden>
            </div>
            <Hidden smDown>
              <Typography style={{ color: 'white' }} className={classes.links}>
                {navigationLinks.map(link => <Link key={link.title} href={link.link} target={link.newTab ? '_blank' : '_self'} rel={link.newTab ? 'noreferrer' : ''}>{link.title}</Link>)}
              </Typography>
            </Hidden>
            {/* <Button variant='contained' color='primary' component={GatsbyLink} to='/recruitment'>Recruitment</Button> */}
            <Hidden mdUp>
              <Box ml={1}>
                <IconButton edge="end" color="primary" aria-label="menu" onClick={toggleDrawer('opened', true)}>
                  <MenuIcon />
                </IconButton>
              </Box>
            </Hidden>
          </Toolbar>
        </AppBar>
  
      </ElevationScroll>

      {/* Drawer for mobile */}
      <React.Fragment>
        <Drawer anchor='right' open={state['opened'] && mdDown} onClose={toggleDrawer('opened', false)}>
        <Box
            pt={4}
            className={classes.drawer}
            role="presentation"
            onClick={toggleDrawer('opened', false)}
            onKeyDown={toggleDrawer('opened', false)}>
            <nav>
              <List>
                <Box mb={4} ml={4}>
                  <ListItem>
                    <ListItemText disableTypography>
                      <Typography variant='h5' className={classes.computingClub}>
                        <GatsbyLink to='/'>NUS Students'<br/>Computing Club</GatsbyLink>
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </Box>
                {navigationLinks.map(link => (
                  <ListItem key={link.title} button component='a' href={link.link} target={link.newTab ? '_blank' : '_self'} rel={link.newTab ? 'noreferrer' : ''}>
                    <ListItemText disableTypography>
                      <Box pl={0}>
                        <Typography color='primary' variant='h6'>
                          {link.title}
                        </Typography>
                      </Box>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </nav>
          </Box>
        </Drawer>
      </React.Fragment>
    </header>
  );
}
    
export default TopBar