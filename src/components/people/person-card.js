import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import Img from 'gatsby-image';


export default function PersonCard(props) {
  const [image, setImage] = useState(props.image);
  return (
    <Card
      variant='outlined'
      onMouseOut={e => setImage(props.image)}
      onMouseOver={e => setImage(props.imageFun)}
      >
      <CardMedia
        title={`${props.name} (${props.role})`}>
        <Img 
          fluid={image}
          onMouseOver={e => {e.currentTarget.fluid = props.imageFun}}
          onMouseOut={e => (e.currentTarget.fluid = props.image)}
          >

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
