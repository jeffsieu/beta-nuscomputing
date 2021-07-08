import React from 'react'
import { Box, Card, Link, Typography, makeStyles, CardHeader, CardActionArea, useMediaQuery, useTheme } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab'
import SocialNight from '../../content/SOC_Social_Night.yaml'
import EFOP from '../../content/E-FOP.yaml'
import FOP from '../../content/main/main_fop.yaml'
import RAG from '../../content/RAG.yaml'
import FSC from '../../content/FSC.yaml'
import FOW from '../../content/FOW.yaml'
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const events = [
  FSC,
  RAG,
  EFOP,
  FOW,
  SocialNight
].sort((event1, event2) => new Date(event1.start_date) - new Date(event2.start_date));

const useStyles = makeStyles((theme) => ({
  instagramWidget: {
    width: '100%',
    border: '0px',
    overflow: 'hidden',
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      height: '1660px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      height: '1900px',
    },
    [theme.breakpoints.only('xl')]: {
      height: '1800px',
    },
  },
  eventCardRoot: {
    display: 'flex',
  },
  eventCardImage: {
    flex: 2,
  },
  eventCardContent: {
    flex: 3,
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  }
}));

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-SG', {month: 'long', day: 'numeric'});
}

function getEventDateString(event) {
  if (event.start_date === event.end_date) {
    return formatDate(event.start_date);
  } else {
    return formatDate(event.start_date) + ' - ' + formatDate(event.end_date);
  }
}
  
function getEventNameString(event) {
  if (event.name != null) {
    return `${event.name} (${event.title})`;
  } else {
    return event.title;
  }
}

function getEventSignupEndDateString(event) {
  if (event.signup_end_date) {
    return `Sign-ups open until ${formatDate(event.signup_end_date)}!`;
  }
}

export default function FreshmenPage() {
  const query = useStaticQuery(graphql`{
  banners: allFile(
    filter: {extension: {glob: "jpg"}, relativePath: {regex: "/freshmen/.*?/banner/"}}
  ) {
    edges {
      node {
        relativePath
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
  people: allFile(
    filter: {extension: {glob: "jpg"}, relativePath: {regex: "/freshmen/.*?/.+/"}}
  ) {
    edges {
      node {
        name
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
  gallery: allFile(
    filter: {extension: {glob: "jpg"}, relativePath: {regex: "/freshmen/.*?/gallery/"}}
  ) {
    edges {
      node {
        relativePath
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}
`);
  const peopleNodes = query.people.edges;
  const bannerNodes = query.banners.edges
  const galleryNodes = query.gallery.edges;
  const peopleImages = {}, banners = {}, gallery = {};
  peopleNodes.forEach(({ node }) => {
    peopleImages[node.name] = node;
  });
  console.log(peopleImages);
  bannerNodes.forEach(({ node }) => {
    // something like freshmen/event/gallery/category/xxx/.../
    const relativePath = node.relativePath;
  
    for (var event of events) {
      const indexOfPath = relativePath.indexOf(event.path);
      if (indexOfPath >= 0) {
        if (!banners[event.path])
          banners[event.path] = {};
        // extract the category/xxx/.../
        const relativeSubpath = relativePath.substring(indexOfPath + event.path.length + 8);
        banners[event.path][relativeSubpath] = node;
      }
    }
  });
  galleryNodes.forEach(({ node }) => {
    // something like freshmen/event/gallery/category/xxx/.../
    const relativePath = node.relativePath;
  
    for (var event of events) {
      const indexOfPath = relativePath.indexOf(event.path);
      
      if (indexOfPath >= 0) {
        // extract the category/xxx/.../
        const relativeSubpath = relativePath.substring(indexOfPath + event.path.length + 9);
        if (!gallery[event.path])
          gallery[event.path] = {};
        gallery[event.path][relativeSubpath] = node;
      }
    }
  }); 
  const classes = useStyles();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
  
  return (
    <div>
        <Typography variant='h3'>
          {FOP.title}
        </Typography>
        <Typography variant='h5'>
          {FOP.subtitle}
        </Typography>
        <Box mt={4}>
          <Typography variant='body1'>
            {FOP.content}
          </Typography>
        </Box>
        <Box mt={8} mb={4}>
          <Typography id='timeline' variant='h4'>
            Timeline
          </Typography>
          <Box mt={2}>
            <Card variant='outlined'  bodyStyle={{ padding: "0"}}>
              <Alert severity='success'>
                <AlertTitle><strong>Updates: Sign ups are open!</strong></AlertTitle>
                Sign up for various events and check out other useful links at  <Link href='https://linktr.ee/socfop'>https://linktr.ee/socfop</Link>!
              </Alert>
              <Alert severity="warning">
                <AlertTitle><strong>COVID Restrictions</strong></AlertTitle>
                In consultation with NUSSU, all face-to-face activities for FOP happening between <u>1 June to 4 July</u> will be suspended.
                <br/>
                Further updates will be provided for face-to-face activities for FOP happening between 5 July to 31 July.
              </Alert>
            </Card>
            {
              events.map((event, index) => {
                const image = banners[event.path] ? banners[event.path]['banner.jpg'] : Object.values(gallery[event.path])[0];
                const isEven = index % 2 === 0;
                return (
                  <Box mt={2}>
                    <GatsbyLink to={event.path} style={{textDecoration: 'none'}}>
                      <Card key={event.path} variant='outlined'>
                        <CardActionArea
                          className={isLargeScreen ? classes.eventCardRoot : ''}
                          >
                          <GatsbyImage
                            image={getImage(image)}
                            className={classes.eventCardImage}
                            style={{
                              order: isEven ? 1 : 0,
                            }} />
                          <CardHeader
                            className={isLargeScreen ? classes.eventCardContent : ''}
                            title={getEventNameString(event)}
                            subheader={
                              event.cancelled
                              ? <Typography variant='h6' color="error">Cancelled due to COVID-19 restrictions :(</Typography>
                              : <div>
                                <Typography variant='h6' color='primary'>{getEventDateString(event)}</Typography>
                                <Typography>{getEventSignupEndDateString(event)}</Typography>
                              </div>}
                          >
                          </CardHeader>
                        </CardActionArea>
                      </Card>
                    </GatsbyLink>
                  </Box>
                );
            })}
          </Box>
        </Box>
        <Box mt={8}>
          <Box mb={2}>
            <Typography variant='h4'>Instagram</Typography>
            <Typography variant='h6'>
               Check us out at <Link color='secondary' href='https://www.instagram.com/socfop/'>@socfop</Link>
            </Typography>
          </Box>
          <iframe
            title="socfop's Instagram"
            src="https://cdn.lightwidget.com/widgets/6432297d5f1656eba2e7dd52ff7a9a17.html"
            scrolling="no"
            allowtransparency="true"
            className={classes.instagramWidget}>
          </iframe>
        </Box>
      {
        FOP.faq ?
          <Box mt={8}>
            <Typography variant='h4'>FAQs</Typography>
            {FOP.faq.map((question) => {
              return <Box mt={2}>
                <Typography variant='h6'>
                  {question.title}
                </Typography>
                <Typography variant='body1'>
                  {question.answer}
                </Typography>
              </Box>
            })}
          </Box>
          : null
      }
    </div>
  );
}
