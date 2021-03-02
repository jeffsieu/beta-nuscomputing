import React from 'react'
import BaseContainer from '../components/base-container';
import { Box, Card, CardContent, Link, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import SocialNight from '../../content/SOC_Social_Night.yaml'
import EFOP from '../../content/E-FOP.yaml'
import FOP from '../../content/main/main_fop.yaml'
import RAG from '../../content/RAG.yaml'
import FSC from '../../content/FSC.yaml'
import FOW from '../../content/FOW.yaml'
import { Link as GatsbyLink } from 'gatsby'

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
  var events = [
    FSC,
    RAG,
    EFOP,
    FOW,
    SocialNight
  ].sort((event1, event2) => new Date(event1.start_date) - new Date(event2.start_date));

  return <BaseContainer title='Freshmen Orientation Camps'>
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
          <Card variant='outlined'>
            <CardContent>
              <List>
                {
                  events.map((event) =>
                    <ListItem component={GatsbyLink} to={event.path}>
                      <ListItemText>
                        {getEventDateString(event)}: <b>{getEventNameString(event)}</b>
                      </ListItemText>
                    </ListItem>
                )}
              </List>
            </CardContent>
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
          src="http://lightwidget.com/widgets/6432297d5f1656eba2e7dd52ff7a9a17.html"
          scrolling="no"
          allowtransparency="true"
          className="lightwidget-widget"
          style={{width: '100%', border: '0', overflow: 'hidden', height: '950px'}}></iframe>
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
  </BaseContainer>;
}

export default FreshmenPage
