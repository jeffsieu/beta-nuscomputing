import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import PersonCard from './person-card.js';

export default function CellRow(props) {
  return (
    <div>
      <Box mb={4}>
        <Typography variant="h5">
          {props.name}
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {props.members.map(
          (member) =>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <PersonCard {...member}/>
            </Grid>
        )}
      </Grid>
    </div>
  );
}
