import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography, Card, CardActions, CardActionArea, CardContent, createStyles } from '@material-ui/core';
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => 
  createStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

type OutlinedCardProps = {
  title: string,
  body: string,
  link: string,
  image: IGatsbyImageData,
}

const OutlinedCard: React.FC<OutlinedCardProps> = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href={props.link}>
        {props.image ? <GatsbyImage alt={props.title} image={props.image} /> : null}
        <CardContent>
          <Typography variant='h5'>
            {props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.body}
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default OutlinedCard;