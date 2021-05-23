import React from 'react'
import BaseContainer from '../components/base-container';
import { Box, Card, Link, List, ListItem, ListItemText, Typography, makeStyles } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab'
import SocialNight from '../../content/SOC_Social_Night.yaml'
import EFOP from '../../content/E-FOP.yaml'
import FOP from '../../content/main/main_fop.yaml'
import RAG from '../../content/RAG.yaml'
import FSC from '../../content/FSC.yaml'
import FOW from '../../content/FOW.yaml'
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby'

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

function FreshmenPage() {
  const classes = useStyles();
  
  var events = [
    FSC,
    RAG,
    EFOP,
    FOW,
    SocialNight
  ].sort((event1, event2) => new Date(event1.start_date) - new Date(event2.start_date));

  return <div>
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
        <Typography variant='h4'>
          Timeline
        </Typography>
        <Box mt={2}>
          <Card variant='outlined'  bodyStyle={{ padding: "0"}}>
            <Alert severity="error">
              <AlertTitle><strong>Updates: COVID Restrictions</strong></AlertTitle>
              In consultation with NUSSU, all face-to-face activities for FOP happening between <u>1 June to 4 July</u> will be suspended.
              <br/>
              Further updates will be provided for face-to-face activities for FOP happening between 5 July to 31 July.
            </Alert>
              <List>
                {
                  events.map((event) =>
                    <ListItem button component={GatsbyLink} to={event.path}>
                      <ListItemText>
                        {event.cancelled ?
                          <span><strike>{getEventDateString(event)}: <b>{getEventNameString(event)}</b></strike> (Cancelled due to COVID-19 restrictions)</span> :
                          <span>{getEventDateString(event)}: <b>{getEventNameString(event)}</b></span>
                        }
                      </ListItemText>
                    </ListItem>
                )}
              </List>
          </Card>
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
  </div>;
}

export default function() {
  const bannerImage = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {eq: "fopbanner.jpg"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }  
    `).allFile.edges[0].node;
  return <BaseContainer title='Freshmen Orientation Camps' background={bannerImage}>
    <FreshmenPage></FreshmenPage>
  </BaseContainer>
}
