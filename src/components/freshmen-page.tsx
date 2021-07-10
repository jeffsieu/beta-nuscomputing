import React from 'react';
import { Box, Card, Link, Typography, makeStyles, CardHeader, CardActionArea, useMediaQuery, useTheme } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
// import SocialNight from '../../content/SOC_Social_Night.yaml'
// import EFOP from '../../content/E-FOP.yaml'
// import FOP from '../../content/main/main_fop.yaml'
// import RAG from '../../content/RAG.yaml'
// import FSC from '../../content/FSC.yaml'
// import FOW from '../../content/FOW.yaml'
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import * as GatsbyTypes from '../types/gatsby-types';

type FOPEvent = {
  start_date: string,
  end_date: string,
} & any;

// const events = ([
//   FSC,
//   RAG,
//   EFOP,
//   FOW,
//   SocialNight
// ] as FOPEvent[]).sort((event1, event2) => new Date(event1.start_date).getUTCMilliseconds() - new Date(event2.start_date).getUTCMilliseconds());
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

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-SG', { month: 'long', day: 'numeric' });
}

export function getEventDateString(event: FOPEvent) {
  if (event.start_date === event.end_date) {
    return formatDate(event.start_date);
  } else {
    return formatDate(event.start_date) + ' - ' + formatDate(event.end_date);
  }
}

function getEventNameString(event: FOPEvent) {
  if (event.name != null) {
    return `${event.name} (${event.title})`;
  } else {
    return event.title;
  }
}

function getEventSignupEndDateString(event: FOPEvent) {
  if (event.signup_end_date) {
    return `Sign-ups open until ${formatDate(event.signup_end_date)}!`;
  }
}

export type PersonNode = {
  name: string,
  childImageSharp: GatsbyTypes.Maybe<Pick<GatsbyTypes.ImageSharp, "gatsbyImageData">>,
} & ImageDataLike;

export type BannerNode = {
  relativePath: string,
  childImageSharp: GatsbyTypes.Maybe<Pick<GatsbyTypes.ImageSharp, "gatsbyImageData">>,
} & ImageDataLike;

export type GalleryNode = {
  relativePath: string,
  childImageSharp: GatsbyTypes.Maybe<Pick<GatsbyTypes.ImageSharp, "gatsbyImageData">>,
} & ImageDataLike;

export default function FreshmenPage() {
  const query = useStaticQuery<GatsbyTypes.FopEventsQuery>(graphql`
    query FOPEvents {
      events: allContentYaml(sort: {fields: start_date, order: ASC}){
        edges {
          node {
            banner_image
            banner_position
            cancelled
            name
            signup_end_date
            start_date
            title
            content
            end_date
            gallery {
              caption
              url
            }
            path
            parent {
              id
            }
            committee {
              directors {
                name
                title
              }
              subcommittee {
                name
                members {
                  name
                  title
                }
                head {
                  name
                  title
                }
              }
            }
          }
        }
      }
      banners: allFile(
        filter: {extension: {glob: "jpg"}, relativePath: {regex: "/freshmen/.*?/banner/"}}
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                quality: 100
              )
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
              gatsbyImageData(
                layout: FULL_WIDTH
                quality: 100
              )
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
              gatsbyImageData(
                layout: FULL_WIDTH
                quality: 100
              )
            }
          }
        }
      }
    }
  `);
  const events = query.events.edges.map((edge) => edge.node);
  const bannerNodes = query.banners.edges.map((edge) => edge.node);
  const galleryNodes = query.gallery.edges.map((edge) => edge.node);
  const banners = bannerNodes.reduce((map, imageNode) => {
    // something like freshmen/event/gallery/category/xxx/.../
    const relativePath = imageNode.relativePath;

    for (var event of events) {
      const indexOfPath = event.path !== null ? relativePath.indexOf(event.path!) : -1;
      if (indexOfPath >= 0) {
        const eventPath = event.path!;
        if (!map.has(eventPath))
          map.set(event.path!, new Map());
        // extract the category/xxx/.../
        const relativeSubpath = relativePath.substring(indexOfPath + eventPath.length + 8);
        map.get(eventPath)!.set(relativeSubpath, imageNode as BannerNode);
      }
    }
    return map;
  }, new Map<string, Map<string, BannerNode>>());

  const gallery = galleryNodes.reduce((map, imageNode) => {
    // something like freshmen/event/gallery/category/xxx/.../
    const relativePath = imageNode.relativePath;

    for (var event of events) {
      const indexOfPath = event.path !== null ? relativePath.indexOf(event.path!) : -1;
      if (indexOfPath >= 0) {
        const eventPath = event.path!;
        if (!map.has(eventPath))
          map.set(event.path!, new Map());
        // extract the category/xxx/.../
        const relativeSubpath = relativePath.substring(indexOfPath + eventPath.length + 9);
        map.get(eventPath)!.set(relativeSubpath, imageNode as GalleryNode);
      }
    }
    return map;
  }, new Map<string, Map<string, GalleryNode>>());

  const classes = useStyles();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div>
      <Typography variant='h3'>
        {/* {FOP.title} */}
      </Typography>
      <Typography variant='h5'>
        {/* {FOP.subtitle} */}
      </Typography>
      <Box mt={4}>
        <Typography variant='body1'>
          {/* {FOP.content} */}
        </Typography>
      </Box>
      <Box mt={8} mb={4}>
        <Typography id='timeline' variant='h4'>
          Timeline
        </Typography>
        <Box mt={2}>
          <Card variant='outlined'>
            <Alert severity='success'>
              <AlertTitle><strong>Updates: Sign ups are open!</strong></AlertTitle>
              Sign up for various events and check out other useful links at  <Link href='https://linktr.ee/socfop'>https://linktr.ee/socfop</Link>!
            </Alert>
            <Alert severity="warning">
              <AlertTitle><strong>COVID Restrictions</strong></AlertTitle>
              In consultation with NUSSU, all face-to-face activities for FOP happening between <u>1 June to 4 July</u> will be suspended.
              <br />
              Further updates will be provided for face-to-face activities for FOP happening between 5 July to 31 July.
            </Alert>
          </Card>
          {
            events.map((event, index) => {
              const eventPath = event.path!;
              const imageNode = (banners.has(eventPath) ? banners.get(eventPath)?.get('banner.jpg') : null) ?? gallery.get(eventPath)?.values().next().value;
              const image = getImage(imageNode)!;
              const isEven = index % 2 === 0;
              return (
                <Box mt={2}>
                  <GatsbyLink to={eventPath} style={{ textDecoration: 'none' }}>
                    <Card key={eventPath} variant='outlined'>
                      <CardActionArea
                        className={isLargeScreen ? classes.eventCardRoot : ''}
                      >
                        <GatsbyImage
                          alt={event.name!}
                          image={image}
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
            })
          }
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
          style={{ backgroundColor: 'transparent' }}
          // allowTransparency={true}
          className={classes.instagramWidget}>
        </iframe>
      </Box>
      {/* {
        FOP.faq ?
          <Box mt={8}>
            <Typography variant='h4'>FAQs</Typography>
            {FOP.faq.map((question: FAQQuestion) => {
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
      } */}
    </div>
  );
}
