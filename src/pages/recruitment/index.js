import React from 'react'
import OutlinedCard from '../../components/outlined-card'
import BaseContainer from '../../components/base-container'
import SignUpButton from '../../components/sign-up-button'
import { Box, Typography, Grid } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby';

const data = [
  {
    title: 'Community Service',
    body: 'To foster a community spirit driven to help others in need',
    link: '/recruitment/community-service',
  },
  {
    title: 'FOP',
    body: 'Join us as project directors and committee members!',
    link: '/recruitment/fop',
  },
  {
    title: 'Marketing',
    body: 'Let’s bring SoC merch to greater heights and let everyone know of our SoC pride!',
    link: '/recruitment/marketing',
  },
  {
    title: 'Publicity',
    body: 'Join us as a photographer, videographer or a graphic designer',
    link: '/recruitment/publicity',
  },
  {
    title: 'Student Relations',
    body: 'Join us to create fun and build relationships',
    link: '/recruitment/student-relations',
  },
  {
    title: 'Sports',
    body: 'Join Sports Committee today to make an impact!',
    link: '/recruitment/sports',
  },
  {
    title: 'Academic Liaison',
    body: 'To be a Learner every day. To realise our Collective Potential.',
    link: '/recruitment/academic-liaison',
  },
  {
    title: 'Welfare',
    body: 'Join us today to promote the mental-wellness of the student body!',
    link: '/recruitment/welfare',
  },
]


function RecruitmentPage() {
  const images = useStaticQuery(graphql`
      query {
        Sports: file(relativePath: { eq: "sports.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        FOP: file(relativePath: { eq: "fop.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        CommunityService: file(relativePath: { eq: "communityservice.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        AcademicLiaison: file(relativePath: { eq: "academicliaison.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        Marketing: file(relativePath: { eq: "marketing.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        Publicity: file(relativePath: { eq: "publicity.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        StudentRelations: file(relativePath: { eq: "studentrelations.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        Welfare: file(relativePath: { eq: "welfare.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  return <BaseContainer title='23rd MC Subcommittee Recruitment'>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box mt={4}>
              <Typography variant='h3'>23rd MC Subcommittee Recruitment</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1'>
            The 23rd Management Committee is looking to recruit passionate and committed subcommittee members to serve the SoC community. Find out more about the eight cells here and join now!
          </Typography>
          {/* <Box mt={4}>
            <Typography variant='body2' color='primary'>
              Sign-ups opening soon!
            </Typography>
          </Box> */}
          <Box mt={4} mb={2}>
            <SignUpButton></SignUpButton>
          </Box>
        </Grid>
        {data.map((item) =>
          <Grid item xs={12} md={6} key={item.title}>
            <OutlinedCard {...item} image={images[item.title.replace(/' '/g, '')]}></OutlinedCard>
          </Grid>
        )}
      </Grid>
  </BaseContainer>;
}

export default RecruitmentPage
