import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CellRow from './cell-row';
import PersonCard from './person-card';

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

  const maxCharacters = 50;

  const cardContents = (
    <div>
      <Box mb={6}>
        <Typography variant="h3">
          {props.name}
        </Typography>
      </Box>

      <Grid container
        direction="column"
        alignItems="center"
        justify="center">
        <Grid item xs={4}>
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
    <CardMedia>
      {/* <Img
      fluid={query.bruh.childImageSharp.fluid}>
      </Img> */}
    </CardMedia>
    <CardContent className={classes.bigCardContent}>
      {cardContents}
    </CardContent>
  </Card>;
}
