import React from 'react'
import BaseContainer from '../components/base-container'
import { Box, Link, Typography, Divider, makeStyles, useTheme } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';

const useStyles = makeStyles((theme) => ({
  rounded: {
    borderRadius: 16,
  },
  instagramWidget: {
    width: '100%',
    border: '0px',
    overflow: 'hidden',
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      height: '736px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      height: '1270px',
    },
    [theme.breakpoints.only('xl')]: {
      height: '1800px',
    },
  }
}));

export default function() {
  function IndexPage() {
    const theme = useTheme();
    const classes = useStyles(theme);
    const image = useStaticQuery(graphql`
      query {
        banner: file(relativePath: { eq: "banner.png" }) {
          childImageSharp {
            fluid(maxWidth: 1500, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        fopBanner: file(relativePath: { eq: "fopbanner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1500, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        },
      }
    `);
    return <div>
      <Box mb={8}>
        <Box mb={4}>
          <Typography variant='h3'>Welcome to NUS Computing!</Typography>
        </Box>
        <Img fluid={image.banner.childImageSharp.fluid} className={classes.rounded}></Img>
        {/* <Typography variant='h6'>
          The <b>23rd Management Committee</b> is looking to recruit subcommittee
          members to serve the SoC community.
          <br/>
          <br/>
          Plan events under <Link color='secondary' component={ GatsbyLink } to='/recruitment/fop'>
            FOP
          </Link>.
          Support beneficaries as part of <Link color='secondary' component={ GatsbyLink } to='/recruitment/community-service'>
            Community Service
          </Link>.
      
          Express your creativity and skills in <Link color='secondary' component={ GatsbyLink } to='/recruitment/marketing'>
            Marketing
          </Link> or <Link color='secondary' component={ GatsbyLink } to='/recruitment/publicity'>Publicity</Link>.
      
          Help your peers under <Link color='secondary' component={ GatsbyLink } to='/recruitment/student-relations'>Student Relations</Link> and <Link color='secondary' component={ GatsbyLink } to='/recruitment/academic-liaison'>
            Academic Liaison
          </Link>. Maybe you're a fan of <Link color='secondary' component={ GatsbyLink } to='/recruitment/sports'>Sports</Link>. Or <Link color='secondary' component={ GatsbyLink } to='/recruitment/welfare'>Welfare</Link>?
      
          <br/>
          <br/>
          No matter who you are, there is <u>bound to be something for you</u>!
          <br/>
          <br/>
          <Button variant='contained' color='secondary' component={ GatsbyLink } to='/recruitment'>
            Learn more
          </Button>
        </Typography> */}
      </Box>
      <Divider/>
      <Box mt={8}>
        <Box mb={8}>
          <Typography variant='h3'>
            Events
          </Typography>
          <Typography variant='h6'>
            Throughout a typical academic year, we organize various events for our members.
            We have Freshmen Orientation Programmes specially designed to integrate the incoming
            freshmen into NUS, collaborative projects with our professors to provide additional
            assistance to weaker students, celebrations for graduating students, and many more events!
          </Typography>
        </Box>
          <Typography color='primary' variant='h4'>Freshmen Orientation Camps</Typography>
          <Box mt={4} mb={4}>
            <a href='/freshmen'>
              <Img fluid={image.fopBanner.childImageSharp.fluid} className={classes.rounded}></Img>
            </a>
          </Box>
          <Box mt={2} mb={4}>
            <Alert severity='success'>
              <AlertTitle><strong>Updates: FOP sign ups are open!</strong></AlertTitle>
              Sign up for various events and check out other useful links at <Link href='https://linktr.ee/socfop'>https://linktr.ee/socfop</Link>!
            </Alert>
            <Alert severity='warning'>
              <AlertTitle><strong>COVID Restrictions</strong></AlertTitle>
              In consultation with NUSSU, all face-to-face activities for FOP happening between <u>1 June to 4 July</u> will be suspended.
              <br/>
              Further updates will be provided for face-to-face activities for FOP happening between 5 July to 31 July.
            </Alert>
          </Box>
          <Typography variant='h6'>
            Incoming freshman, have a look at our&nbsp;
            <Link color='secondary' component={ GatsbyLink } to='/freshmen'>Freshmen Orientation Projects</Link> we have in store for you!
            <br></br>
            <br></br>
            <b>Kickstart your journey</b> in the School of Computing with our very own
            Freshman Orientation Programmes! With an exciting lineup of events during the summer, from (hybrid) camps to RAG parformances
            to a social night, you will be sure to get a summer's worth of fun with us! So come <u>join us and make everlasting friendships</u> with
            fellow freshmen and seniors alike this summer!
          </Typography>
      </Box>
      <Box mt={4}>
        <Divider></Divider>
      </Box>
      <Box mt={8}>
        <Typography variant='h3'>New to NUS?</Typography>
        <Typography variant='h6'>
          Check out our <Link color='secondary' component={ GatsbyLink } to='/guides'>Student Guides</Link> page to orientate yourself around some
          of the facilities and services NUS has to offer!
        </Typography>
      </Box>
      <Box mt={4}>
        <Divider></Divider>
      </Box>
      <Box mt={8}>
        <Box mb={4}>
          <Typography variant='h3'>Instagram</Typography>
          <Typography variant='h6'>
              Check us out at <Link color='secondary' href='https://www.instagram.com/nuscomputingclub/'>@nuscomputingclub</Link>
          </Typography>
        </Box>
        <iframe
          title="nuscomputing's instagram"
          src="https://cdn.lightwidget.com/widgets/2dc5ee7fb15559229812e0469d4f070c.html"
          scrolling="no"
          allowtransparency="true"
          className={classes.instagramWidget}>
        </iframe>
      </Box>
    </div>;
  }

  return <BaseContainer title='Home'>
    <IndexPage></IndexPage>
  </BaseContainer>
}
