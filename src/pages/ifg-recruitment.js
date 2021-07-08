import React from 'react';
import BaseContainer from '../components/base-container';
import { Box, Button, Card, CardContent, CardActionArea, CardMedia, Grid, ListItem, ListItemIcon, ListItemText, Typography, Chip } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import TelegramIcon from '@material-ui/icons/Telegram';


const sports = [
  {
    "name": "Sports",
    "games": [
      {
        "name": "Volleyball",
        "link": "https://t.me/joinchat/TcElnn8Jjdg5Yjhl",
        "image": "volleyball"
      },
      {
        "name": "Table Tennis",
        "link": "https://t.me/joinchat/0EgGuoh-fgRlY2I1",
        "image": "table-tennis"
      },
      {
        "name": "Tennis",
        "link": "https://t.me/joinchat/2g8CdOIWXSs2YzM1",
        "image": "tennis"
      },
      {
        "name": "Badminton",
        "link": "https://t.me/joinchat/3ft2d3s6EpIwNTll",
        "image": "badminton"
      },
      {
        "name": "Swimming",
        "link": "https://t.me/joinchat/uhiJiHw48ho5YTZl",
        "image": "swimming"
      },
    ]
  },
  {
    "name": "Board games",
    "games": [
      {
        "name": "International Chess",
        "link": "https://t.me/joinchat/LDAIaiPqYpYwNzM1",
        "image": "chess"
      },
      {
        "name": "Reversi",
        "link": "https://t.me/joinchat/e6ge6orWTeRjMDU1",
        "image": "reversi"
      }
    ]
  },
  {
    "name": "E-sports",
    "new": true,
    "games": [
      {
        "name": "Valorant",
        "link": "https://t.me/joinchat/IQtdcjLepoliYWQ1",
        "image": "valorant"
      },
      {
        "name": "League of Legends",
        "link": "https://t.me/joinchat/JCpCOxlhK4Q2YWQ1",
        "image": "league-of-legends"
      }
    ]
  }
];

function IfgRecruitmentPage() {
  const { allFile } = useStaticQuery(graphql`{
  allFile(
    filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativePath: {regex: "/ifg/"}}
  ) {
    edges {
      node {
        name
        childImageSharp {
          gatsbyImageData(
            quality: 100
            aspectRatio: 2
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
    }
  }
}
`);

  const nodes = allFile.edges.map((edge) => edge.node);
  console.log(allFile);
  const images = nodes.reduce(function (map, node) {
    map[node.name] = node;
    return map;
  }, {});

  return (
    <BaseContainer title='About'>
      <Box mt={4} mb={4}>
        <Typography variant='h3' gutterBottom>
          NUS Inter-Faculty Games Recruitment
        </Typography>
        <Typography variant='h6' gutterBottom>
          The NUS Inter-Faculty Games is an annual schoolwide sporting event organised by the NUS Students' Sports Club.

          <br />
          <br />
          <Alert severity="success">
            <AlertTitle><strong>Player Recruitment for IFG 2021 is now open!</strong></AlertTitle>
            Join the respective Telegram groups to represent SoC at this year's IFG and engage in friendly competition with students from all faculties and Yale-NUS College.
          </Alert>

        </Typography>
        <Alert severity="warning">
          <AlertTitle><strong>Note: COVID Restrictions</strong></AlertTitle>
          Due to the Covid-19 Restrictions, the sports list for IFG 2021 has been scaled down
        </Alert>
      </Box>
      <Box mt={8} mb={4}>
        {
          sports.map((category) =>
            <div>
              <Typography variant='h4' gutterBottom>
                {category.name}
                {
                  category.new &&
                  <Box ml={2} style={{ display: 'inline' }}>
                    <Chip label="New" color="secondary" />
                  </Box>
                }
              </Typography>
              <Box mb={4}>
                <Grid container spacing={2}>
                  {
                    category.games.map((game) =>
                      <Grid item xs={12} md={6} lg={4} xl={3}>
                        <a href={game.link} target="blank" rel="noopener" style={{ textDecoration: 'none' }}>
                          <Card
                            variant='outlined' style={{ borderRadius: '8px' }}>
                            <CardActionArea>
                              <CardMedia
                              // title={`${props.name} (${props.title})`}
                              >
                                <GatsbyImage image={getImage(images[game.image])} aspectRatio={3} />
                              </CardMedia>
                              <CardContent>
                                <Typography variant="overline" color="primary">
                                  Telegram link
                                </Typography>
                                <Typography variant="h6">
                                  {game.name}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </a>
                        <Typography variant='body1'>
                        </Typography>
                      </Grid>
                    )
                  }
                </Grid>
              </Box>
            </div>
          )
        }
      </Box>
    </BaseContainer>
  );
}

export default IfgRecruitmentPage;
