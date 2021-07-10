import React from 'react'
import BaseContainer from '../components/base-container'
import { Avatar, Box, Button, Divider, Grid, Typography } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import ArrowBack from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { GatsbyImage, getImage, IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image";
import { PersonNode, BannerNode, GalleryNode, getEventDateString } from '../components/freshmen-page';
import * as GatsbyTypes from '../types/gatsby-types';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(24),
    height: theme.spacing(24),
  },
  button: {
    margin: theme.spacing(1),
  },
  rounded: {
    borderRadius: '8px',
  },
  multiline: {
    whiteSpace: 'pre',
  },
  caption: {
    position: 'absolute',
    padding: '8px 16px',
    top: '16px',
    background: theme.palette.type == 'dark' ? '#333333bb' : '#ffffffbb',
    borderRadius: '4px',
    backdropFilter: 'blur(10px)'
  }
}));

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-SG', { year: 'numeric', month: 'long', day: 'numeric' });
}

type Person = GatsbyTypes.ContentYamlCommitteeDirectors
  | GatsbyTypes.ContentYamlCommitteeSubcommitteeMembers
  | GatsbyTypes.ContentYamlCommitteeSubcommitteeHead;

export const query = graphql`
  query FOPTemplate($galleryPath: String, $bannerPath: String) {
    banners: allFile(
      filter: {extension: {glob: "jpg"}, relativePath: {regex: $bannerPath}}
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              quality: 100
              placeholder: BLURRED
            )
          }
        }
      }
    }
    people: allFile(
      filter: {extension: {glob: "jpg"}, relativePath: {regex: "/freshmen/.*?/.+/"}}
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              quality: 100
              placeholder: BLURRED
            )
          }
        }
      }
    }
    gallery: allFile(
      filter: {extension: {glob: "jpg"}, relativePath: {regex: $galleryPath}}
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              quality: 100
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
` as GatsbyTypes.FopTemplateQuery;

type FopTemplateProps = {
  event: GatsbyTypes.ContentYaml,
  peopleImages: any,
  gallery: any,
}

type PersonAvatarProps = {
  title: string,
  person: Person,
  image: IGatsbyImageData,
}

const FopTemplate: React.FC<FopTemplateProps> = ({ event, peopleImages, gallery }) => {
  const classes = useStyles();

  const PersonAvatar: React.FC<PersonAvatarProps> = ({ title, person, image }) => {
    return (
      <Box mt={2} display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
        <Avatar className={classes.large} alt={person.name!}>
          <GatsbyImage alt={person.name!} image={image} style={{ width: '100%', height: '100%' }} />
        </Avatar>
        <Box mt={1}>
          <Typography variant='h6'>{person?.name}</Typography>
        </Box>
        <Typography className={classes.multiline} variant='overline' style={{ lineHeight: '1', textAlign: 'center' }}>{title}</Typography>
      </Box>
    );
  }

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const BackButton = () =>
    <Button
      color="primary"
      variant='outlined'
      className={classes.button}
      size="large"
      component={GatsbyLink}
      to='/freshmen/#timeline'
      startIcon={<ArrowBack />}>Back to main page
    </Button>;
  return (
    <div>
      <Box mb={4}>
        <BackButton></BackButton>
      </Box>
      <Typography variant='h3'>{event.name}</Typography>
      <Box mt={-1}>
        <Typography variant='h5'>{event.title}
        </Typography>
      </Box>
      <Box mt={2} mb={4}>
        {
          event.cancelled ?
            <Alert severity="error">
              <AlertTitle><strong>Updates: COVID Restrictions</strong></AlertTitle>
              This event has been cancelled due to tightened COVID-19 measures.
            </Alert>
            :
            <Typography variant='h6' color='primary'>
              {getEventDateString(event)}
            </Typography>
        }
      </Box>
      <Box mt={6}>
        {event.content!.map((paragraph, index) =>
          <Typography key={index} variant='body1' gutterBottom>
            {paragraph}
          </Typography>
        )}
      </Box>
      {
        event.gallery &&
        <div>
          <Box mt={4}>
            {
              event.gallery.map((photo, index) => {
                const leftAlign = index % 2 === 0;
                // const image = banners.g[event.path] ? banners[event.path]['banner.jpg'] : Object.values(gallery[event.path])[0];
                const photoNode = gallery.get(photo!.url)!;
                return (
                  <Box key={index} mt={4} position='relative'>
                    {/* Put on the left for even indices, right for odd indices */}
                    <GatsbyImage
                      alt='Event photo'
                      image={getImage(photoNode)!}
                      className={classes.rounded} />

                    {/* Show this special text only for certain sizes */}
                    {
                      isSmallScreen ? <Box mt={2}>
                        <Typography>
                          <b>{photo!.caption}</b>
                        </Typography>
                      </Box>
                        : <Typography variant='h6'
                          className={classes.caption}
                          style={{
                            right: leftAlign ? '25%' : '16px',
                            left: leftAlign ? '16px' : '25%',
                            textAlign: leftAlign ? 'left' : 'right',
                          }}>
                          {photo!.caption}
                        </Typography>
                    }
                  </Box>
                );
              })
            }
          </Box>
          <Box mt={4}>
            <BackButton></BackButton>
          </Box>
        </div>
      }
      <Box mt={4}>
        <Divider></Divider>
      </Box>
      <Box mt={8}>
        <Box mb={4}>
          <Typography variant='h5' style={{ textAlign: 'center' }}>
            Brought to you by:
          </Typography>
        </Box>
        <Typography variant='h5'>
          Directors
        </Typography>
        <Box mt={2}>
          <Grid container>
            {event.committee!.directors!.map((director) =>
              <Grid item xs={12} sm={6} md={4} xl={3} key={director!.name}>
                <PersonAvatar person={director!} title={director!.title!} image={getImage(peopleImages.get(director!.name!.replace(/ |,/g, '')))!}></PersonAvatar>
              </Grid>
            )}
          </Grid>
        </Box>
        {event.committee!.subcommittee!.map((subcommittee) =>
          <Box mt={4} key={subcommittee!.name}>
            <Typography variant='h5'>
              {subcommittee!.name}
            </Typography>
            <Grid container spacing={0}>
              {[...(subcommittee!.head ? [subcommittee!.head] : []), ...(subcommittee!.members ?? []).sort((m1, m2) => m1!.name!.localeCompare(m2!.name!))].map((member) =>
                <Grid item xs={12} sm={6} md={4} xl={3} key={member!.name}>
                  <PersonAvatar title={member!.title ?? `${subcommittee!.name} Member`} person={member!} image={getImage(peopleImages.get(member!.name!.replace(/ |,/g, '')))!}></PersonAvatar>
                </Grid>
              )}
            </Grid>
          </Box>
        )}
      </Box>
      <Box mt={8}>
        <BackButton></BackButton>
      </Box>
    </div>
  );
}

const FopTemplatePage: React.FC<any> = (props) => {
  const event = props.pageContext.event as GatsbyTypes.ContentYaml;
  const query = props.data as GatsbyTypes.FopTemplateQuery;
  const bannerNodes = query.banners.edges.map((edge) => edge.node);
  const galleryNodes = query.gallery.edges.map((edge) => edge.node);
  const bannerImage = bannerNodes ? bannerNodes[0] as unknown as ImageDataLike : null;
  const peopleNodes = query.people.edges.map((edge) => edge.node);

  const peopleImages = peopleNodes.reduce((map, personNode) => {
    map.set(personNode.name, personNode as PersonNode);
    return map;
  }, new Map<string, PersonNode>());

  console.log(bannerImage);

  const gallery = galleryNodes.reduce((map, imageNode) => {
    // something like freshmen/event/gallery/category/xxx/.../
    const relativePath = imageNode.relativePath;

    const indexOfPath = event.path !== null ? relativePath.indexOf(event.path!) : -1;
    if (indexOfPath >= 0) {
      const eventPath = event.path!;
      // extract the category/xxx/.../
      const relativeSubpath = relativePath.substring(indexOfPath + eventPath.length + 9);
      map.set(relativeSubpath, imageNode);
    }
    return map;
  }, new Map<string, any>());

  return <BaseContainer
    title={event.name!}
    background={bannerImage ? getImage(bannerImage)! : undefined}
    backgroundPosition={event.banner_position!}
  >
    <FopTemplate
      event={event}
      peopleImages={peopleImages}
      gallery={gallery}
    />
  </BaseContainer>
}

export default FopTemplatePage
