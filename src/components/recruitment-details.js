import React from 'react'
import { Avatar, Box, Button, Divider, Grid, Hidden, Typography } from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { navigate } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SignUpButton from './sign-up-button'

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Spacer = () => <div style={{flex: 1}}></div>;

const headerSizes = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
];

function nextHeaderSize(headerSize) {
  return headerSizes[Math.min(headerSizes.indexOf(headerSize) + 1, headerSizes.length - 1)];
}

const Section = (section) => {
  if (section.divider)
    return <Box mt={6}>
      <Divider></Divider>
    </Box>
  const marginTop = headerSizes.indexOf('subtitle1') - headerSizes.indexOf(section.headerSize) ;
  return <div>
    <Box mt={marginTop * 2}>
      <Typography variant={section.headerSize}>{section.title}</Typography>
    </Box>
    <Typography variant='body1' component='span'>
      {section.content}
      {
        section.bullets ?
          <ul>
            {section.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
          </ul>
          : null
      }
    </Typography>
    {section.subsections ?
          section.subsections.map((subsection, index) => 
            <Section key={index} {...subsection} headerSize={nextHeaderSize(section.headerSize)}/>)
        : null}
  </div>;
}

const RecruitmentDetails = (props) => {
  const classes = useStyles();
  const BackButton = () =>
    <Button
      color="primary"
      variant='outlined'
      className={classes.button}
      size="large"
      onClick={() => navigate(-1)}
      startIcon={<ArrowBack />}>Back to recruitment page
    </Button>;
  return (
    <div>
      <BackButton></BackButton>
      <Box display='flex' mt={4}>
        <Typography variant='h3'>
          {props.name}
        </Typography>
        <Spacer/>
        <Hidden lgDown>
          <div>
            <SignUpButton/>
          </div>
        </Hidden>
      </Box>
      <Box mt={4}>
        <Typography variant='h4'>The Team</Typography>
      </Box>
      <Hidden smDown>
        <Box display='flex' flexDirection="row" mt={4}>
          <Spacer/>
            {props.team.people.map((person, index) =>
              <Box key={index} display="flex" m="auto" flexDirection="column" justify='center' alignItems='center' ml={index === 0 ? 0 : 4}>
                <Avatar className={classes.large} alt={person.name} component={GatsbyImage} image={getImage(props.team.query[person.name.replace(/ /g, '')])}/>
                <Box mt={1}>
                  <Typography variant='h6'>{person.name}</Typography>
                </Box>
                <Typography variant='overline' style={{lineHeight: '1', textAlign: 'center'}}>{person.position}</Typography>
              </Box>
            )}
          <Spacer/>
        </Box>
      </Hidden>
      <Hidden mdUp>
        <Grid container>
          {props.team.people.map((person, index) =>
            <Grid item xs={6} key={index}>
              <Box mt={4} style={{ display: 'flex', flexDirection: 'column'}}  justifyContent='center' alignItems='center' >
                <Avatar className={classes.large} alt={person.name} component={GatsbyImage} image={getImage(props.team.query[person.name.replace(/ /g, '')])} />
                <Box mt={1}>
                  <Typography variant='h6'>{person.name}</Typography>
                </Box>
                <Typography variant='overline' style={{ lineHeight: '1', textAlign: 'center' }}>{person.position}</Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Hidden>
      {props.sections.map(
        (section, index) => <Section key={index} {...section} headerSize='h4'></Section>
      )}
      <Hidden xsDown>
        <Box mt={4} display='flex'>
          <BackButton></BackButton>
          <Spacer />
          <Box display='flex' flexDirection='column' justifyContent='center'>
            <SignUpButton />
          </Box>
        </Box>
      </Hidden>
      <Hidden smUp>
        <Box mt={4}>
          <BackButton></BackButton>
          <Spacer />
          <Box ml={1}>
            <SignUpButton />
          </Box>
        </Box>
      </Hidden>
    </div>
  );
}

export default RecruitmentDetails
