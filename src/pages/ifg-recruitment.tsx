import React from 'react';
import BaseContainer from '../components/base-container';
import { Box, Card, CardContent, CardActionArea, CardMedia, Grid, Link, Typography, Chip } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import * as GatsbyTypes from '../types/gatsby-types';

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
        "link": "https://t.me/joinchat/AWTeiBfVH6MzOTc1",
        "image": "league-of-legends"
      }
    ]
  }
];


type GameNode = {
  name: string,
  childImageSharp: GatsbyTypes.Maybe<Pick<GatsbyTypes.ImageSharp, "gatsbyImageData">>,
} & ImageDataLike;

export default function IfgRecruitmentPage() {
  const { games, banner } = useStaticQuery<GatsbyTypes.GamesQuery>(graphql`
    query Games {
      games: allFile(
        filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativePath: {regex: "/ifg/"}}
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 2
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
      banner: allFile(
        filter: {relativePath: {regex: "/ifg/banner.jpg/"}}
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
  `);

  const gameNodes = games.edges.map((edge) => edge.node);
  const images = gameNodes.reduce(function (map, node) {
    map.set(node.name, node as GameNode);
    return map;
  }, new Map<string, GameNode>());
  return (
    <BaseContainer title='IFG Recruitment' background={getImage(banner.edges[0].node as ImageDataLike)!} backgroundPosition="50% 25%">
      <Box mt={4} mb={4}>
        <Typography variant='h3' gutterBottom>
          NUS Inter-Faculty Games Recruitment
        </Typography>
        <Box mb={4}>
          <Alert severity="error">
            <AlertTitle><strong>COVID update: IFG Recruitment halted</strong></AlertTitle>
            IFG recruitment has been halted due to COVID 19. Further information will be provided at a later date.
          </Alert>
          {/* <Alert severity="success">
            <AlertTitle><strong>Player Recruitment for IFG 2021 is now open!</strong></AlertTitle>
            Join the respective Telegram groups to represent SoC at this year's IFG and engage in friendly competition with students from all faculties and Yale-NUS College.
          </Alert> */}
        </Box>
        <Typography variant='h6' gutterBottom>
          The NUS Inter-Faculty Games is an annual schoolwide sporting event organised by the NUS Students' Sports Club.
          <br />
          <br />
          <Typography variant="h6">
            Feel free to contact us at <Link href="mailto:sports@nuscomputing.com" color="secondary">sports@nuscomputing.com</Link> for any queries.
          </Typography>
        </Typography>
      </Box>
      <Box>
      </Box>
      <Box mt={4} mb={4}>
        {
          sports.map((category) =>
            <Box mt={8}>
              <Typography variant='h4' gutterBottom>
                {category.name}
                {
                  category.new &&
                  <Box ml={2} display='inline'>
                    <Chip label="New" color="secondary" />
                  </Box>
                }
              </Typography>
              {
                category.name === "Sports" && 
                <Box mb={2}>
                  <Alert severity="warning">
                    <AlertTitle><strong>Note: COVID Restrictions</strong></AlertTitle>
                    The sports list for IFG 2021 has been scaled down due to the COVID-19 Restrictions.
                  </Alert>
                </Box>
              }
              <Grid container spacing={2}>
                {
                  category.games.map((game) =>
                    <Grid item xs={12} md={6} lg={4} xl={3}>
                      <a href={game.link} target="blank" rel="noopener" style={{ textDecoration: 'none' }}>
                        <Card
                          variant='outlined' style={{ borderRadius: '8px' }}>
                          <CardActionArea disabled>
                            <CardMedia>
                              <GatsbyImage alt={game.name} image={getImage(images.get(game.image)!)!} />
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
          )
        }
      </Box>
    </BaseContainer>
  );
}
