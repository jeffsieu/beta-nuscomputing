import React from 'react'
import BaseContainer from '../components/base-container';
import { Box, Card, CardContent, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import SocialNight from '../../content/SOC_Social_Night.yaml'
import EFOP from '../../content/E-FOP.yaml'
import FOP from '../../content/main/main_fop.yaml'
import RAG from '../../content/RAG.yaml'
import FSC from '../../content/FSC.yaml'
import FOW from '../../content/FOW.yaml'
import { Link } from 'gatsby'

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
      <Typography variant='h4'>
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
                    <ListItem component={Link} to={event.path}>
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
      <iframe
      src="https://cdn.lightwidget.com/widgets/2dc5ee7fb15559229812e0469d4f070c.html"
      scrolling="no" allowtransparency="true"
       className="lightwidget-widget"
       style={{width: '100%', border: '0px', overflow: 'hidden', height: '950px'}}></iframe>
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
