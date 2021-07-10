import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Divider, Grid, makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CellRow from './cell-row';
import PersonCard from './person-card';
import { GatsbyImage } from "gatsby-plugin-image";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  rounded: {
    borderRadius: 32,
  },
  bigCardContent: {
    padding: 32,
  }
});

export default function WingContainer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const [image, setImage] = useState(props.image);

  const cardContents = (
    <div>
      <Box mb={6}>
        <Typography id={props.name} variant="h4">
          {props.name}
        </Typography>
      </Box>
      <div
        role="button"
        onMouseOut={e => setImage(props.image)}
        onFocus={e => setImage(props.image)}
        onMouseOver={e => setImage(props.imageFun)}
        onBlur={e => setImage(props.imageFun)}>
        <GatsbyImage alt={props.name} image={image} />
      </div>
      <Box mt={4}>
        <Divider></Divider>
      </Box>
      <Box mt={8} mb={4}>
        <Typography variant="h5">
          Head
        </Typography>
      </Box>
      <Grid container
        alignItems="center"
        justify="center">
        <Grid item sm={6} md={4} xs={12}>
          <PersonCard {...props.head}/>
        </Grid>
      </Grid>
      <Box mb={4}>
        {props.cells.map((cell) =>
          <CellRow {...cell}></CellRow>
        )}
      </Box>
    </div>
  );

  if (isSmallScreen) {
    return cardContents;
  }
    return <Card>
    <CardContent className={classes.bigCardContent}>
      {cardContents}
    </CardContent>
  </Card>;
}
