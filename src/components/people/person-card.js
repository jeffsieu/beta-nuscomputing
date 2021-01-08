import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import Img from 'gatsby-image';


export default function PersonCard(props) {
  return (
    <Card variant='outlined'>
      <CardMedia
        title={`${props.name} (${props.role})`}>
        <Img
          fluid={props.image.fluid}>
        </Img>
      </CardMedia>
      <CardContent>
        <Box mb={1}>
          <Typography variant="subtitle2" color="textSecondary">
            {props.role}
          </Typography>
        </Box>
        <Typography variant="h6" component="h2">
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
