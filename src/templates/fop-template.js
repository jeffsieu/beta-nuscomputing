import React from 'react'
import BaseContainer from '../components/base-container'
import { Avatar, Box, Button, Divider, Grid, Typography } from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Img from 'gatsby-image'

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(24),
    height: theme.spacing(24),
  },
  button: {
    margin: theme.spacing(1),
  },
  rounded: {
    borderRadius: '8px',
  },
  multiline: {
    whiteSpace: 'pre',
  }
}));

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function getEventDateString(event) {
  if (event.start_date === event.end_date) {
    return formatDate(event.start_date);
  } else {
    return formatDate(event.start_date) + ' - ' + formatDate(event.end_date);
  }
}

function FopTemplate(props) {
  const classes = useStyles();

  function PersonAvatar(person) {
    return <Box mt={2} style={{ display: 'flex', flexDirection: 'column' }} justifyContent='center' alignItems='center' >
      <Avatar className={classes.large} alt={person.name} component={Img} fluid={images[person.name.replace(/ |,/g, '')]?.childImageSharp?.fluid ?? null} />
      <Box mt={1}>
        <Typography variant='h6'>{person.name}</Typography>
      </Box>
      <Typography className={classes.multiline} variant='overline' style={{ lineHeight: '1', textAlign: 'center' }}>{person.title}</Typography>
    </Box>
  }

  const query = useStaticQuery(graphql`
  query {
    banners: allFile(filter: {extension: {glob: "jpg"}, relativePath: {regex: "/freshmen/.*?/banner/"}}) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    people: allFile(filter: {extension: {glob: "jpg"}, relativePath: {regex: "/freshmen/.*?/.+/"}}) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    gallery: allFile(filter: {extension: {glob: "jpg"}, relativePath: {regex: "/freshmen/.*?/gallery/"}}) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  
  `);
  const event = props.pageContext.pageContent;
  const imagesRaw = query.people.edges;
  const bannersRaw = query.banners.edges
  const galleryRaw = query.gallery.edges;
  const images = {}, banners = {}, gallery = {};
  
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  imagesRaw.forEach(({ node }) => {
    images[node.name] = node;
  });
  bannersRaw.forEach(({ node }) => {
    // something like freshmen/event/gallery/category/xxx/.../
    const relativePath = node.relativePath;

    const indexOfPath = relativePath.indexOf(event.path);

    if (indexOfPath >= 0) {
      // extract the category/xxx/.../
      const relativeSubpath = relativePath.substring(indexOfPath + event.path.length + 8);
      banners[relativeSubpath] = node;
    }

  });
  galleryRaw.forEach(({ node }) => {
    // something like freshmen/event/gallery/category/xxx/.../
    const relativePath = node.relativePath;

    const indexOfPath = relativePath.indexOf(event.path);

    if (indexOfPath >= 0) {
      // extract the category/xxx/.../
      const relativeSubpath = relativePath.substring(indexOfPath + event.path.length + 9);
      gallery[relativeSubpath] = node;
    }
  }); 

  const BackButton = () =>
  <Button
    color="primary"
    variant='outlined'
    className={classes.button}
    size="large"
    component={GatsbyLink}
    to='/freshmen'
    startIcon={<ArrowBack />}>Back to main page
  </Button>
  const bannerImage = banners[event.banner_image];
  return <BaseContainer title={event.name} background={bannerImage} backgroundPosition={event.banner_position}>
    <Box mb={4}>
      <BackButton></BackButton>
    </Box>
    <Typography variant='h3'>{event.name}</Typography>
    <Box mt={-1}>
      <Typography variant='h5'>{event.title}
      </Typography>
    </Box>
    <Box mt={2}>
      <Typography variant='h6' color='primary'>
        {getEventDateString(event)}
      </Typography>
    </Box>
    <Box mt={6}>
      <Typography variant='body1'>
        {event.content.map(paragraph => <div>{paragraph}<br></br><br></br></div>)}
      </Typography>
    </Box>
    {
      event.gallery ?
        <div>

          <Box mt={4}>
            {
              event.gallery.map((photo, index) => {
                const leftAlign = index % 2 === 0;
                return <Box mt={4} style={{position: 'relative'}}>
                  {/* Put on the left for even indices, right for odd indices */}
                  <Img className={classes.rounded} fluid={gallery[photo.url]?.childImageSharp?.fluid ?? null}></Img>

                  {/* Show this special text only for certain sizes */}
                  {
                    isSmallScreen ? <Box mt={2}>
                      <Typography>
                        <b>{photo.caption}</b>
                      </Typography>
                    </Box>
                    : <Typography variant='h6'
                    style={{
                      position: 'absolute',
                      padding: '8px 16px',
                      top: '16px',
                      right: leftAlign ? '25%' : '16px',
                      left: leftAlign ? '16px' : '25%',
                      textAlign: leftAlign ? 'left' : 'right',
                      background: '#ffffffbb',
                      borderRadius: '4px',
                      backdropFilter: 'blur(10px)'}}>
                    {photo.caption}
                  </Typography>
                  }
                </Box>
              })
            }
          </Box>
          <Box mt={4}>
            <BackButton></BackButton>
          </Box>
        </div>
        : null
    }
    <Box mt={4}>
      <Divider></Divider>
    </Box>
    <Box mt={8}>
      <Box mb={4}>
        <Typography variant='h5' style={{textAlign: 'center'}}>
          Brought to you by:
        </Typography>
      </Box>
      <Typography variant='h5'>
        Directors
      </Typography>
      <Box mt={2}>
        <Grid container>
          {event.committee.directors.map((director) =>
            <Grid item xs={12} sm={6} md={4} xl={3} key={director.name}>
              <PersonAvatar {...director}></PersonAvatar>
            </Grid>
          )}
        </Grid>
      </Box>
      {Object.entries(event.committee.subcommittee).map(([name, subcommittee]) =>
        <Box mt={4} key={name}>
          <Typography variant='h5'>
            {name}
          </Typography>
          <Grid container spacing={0}>
            {[...(subcommittee.head ? [subcommittee.head] : []), ...(subcommittee.members ?? []).sort((m1, m2) => m1.name.localeCompare(m2.name))].map((member) =>
            <Grid item xs={12} sm={6} md={4} xl={3} key={member.name}>
              <PersonAvatar {...member} title={member.title ?? `${name} Member`}></PersonAvatar>
            </Grid>
            )}
          </Grid>
        </Box>
      )}
    </Box>
    <Box mt={8}>
      <BackButton></BackButton>
    </Box>
  </BaseContainer>;
}
export default FopTemplate
