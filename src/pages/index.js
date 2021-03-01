import React from 'react'
import BaseContainer from '../components/base-container'
import { Box, Link, Typography, Divider, makeStyles } from '@material-ui/core'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';

const useStyles = makeStyles((theme) => ({
  rounded: {
    borderRadius: 16,
  },
}));


function IndexPage() {
  const classes = useStyles();
  const image = useStaticQuery(graphql`
  query {
    banner: file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid(maxWidth: 1500, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `);
  return <BaseContainer title='Home'>
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
    <Box mt={8}>
      <Typography variant='h3'>New to NUS?</Typography>
      <Typography variant='h6'>
        Check out our <Link color='secondary' component={ GatsbyLink } to='/guides'>Student Guides</Link> page to orientate yourself around some
        of the facilities and services NUS has to offer!
      </Typography>
    </Box>
  
  </BaseContainer>;
}

export default IndexPage
