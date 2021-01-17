import React from 'react'
import BaseContainer from '../../components/base-container'
import { useStaticQuery, graphql } from 'gatsby';
import RecruitmentDetails from '../../components/recruitment-details'

const Publicity = () => {
  const props = {
    name: 'Publicity',
    team: {
      people: [
        {
          name: 'Lin Fangyuan',
          position: 'Director',
        },
        {
          name: 'Koh Jia Xian',
          position: 'Deputy Director (Graphic & Content)',
        },
        {
          name: 'Jonathan Lee',
          position: 'Deputy Director (Photo & Video)',
        },
      ],
      query: useStaticQuery(graphql`
        query {
          LinFangyuan: file(relativePath: { eq: "linfangyuan.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          JonathanLee: file(relativePath: { eq: "jonathanlee.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          KohJiaXian: file(relativePath: { eq: "kohjiaxian.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `),
    },
    sections: [
      {
        title: 'Overview',
        content: `The publicity cell consists of three subcommittees, namely, photography, videography and
        graphic design. However, your responsibilities may vary through your term, and you may be
        required to rotate around the subcommittees. Fear not if you do not have experience, as we
        will provide the necessary training, before expecting you to be on the job.`,
      },
      {
        divider: true,
      },
      {
        title: 'Vision, Goals',
        subsections: [
          {
            content: `We aim to promote the Computing Club’s activities to the best of our abilities, and we hope to
            create a fun, open learning culture within the cell.`,
          },
          {
            content: `If you are interested in Photography, Videography or Design, look no further! Our sole
            responsibilities through the year include photography, videography and publicity coverage for
            events organized by the Computing Club. Some of the events where we are involved are the
            Freshmen Orientation Projects (FOP), Computing Day and Welfare Day.`,
          },
          {
            content: `By joining us, you would be exposed to various skills in the field of photography, videography,
            design, and you would also have access to professional-grade equipment and software. You will
            be given room to flex your creative muscles, and hence connect the student body to the events
            we, the Computing Club, organize.`,
          },
        ],
      },
      {
        divider: true,
      },
      {
        title: 'Subcommittees',
        subsections: [
          {
            title: 'Photography',
            content: `You will be providing photo coverage for events throughout the academic year, and be involved
            in the post-processing of photos! If you have no prior experience, there will be initiatives such
            as photography workshops to help you get started! Furthermore, there’s no need to splurge on
            equipment and software, as we will be providing them!`,
          },
          {
            title: 'Videography',
            content: `You will be providing video coverage for events throughout the academic year, and be involved
            in the creative process of staging and sequencing a video. You will also be involved in video
            editing and production of videos. If you have no prior experience, we will be providing lessons
            to get you started. Furthermore, there will be no need to have your own equipment or
            software, as we will be providing them!`,
          },
          {
            title: 'Graphic Design',
            content: `Design graphics for posters, logos, shirts, merchandise etc. or handle the ideation of posts for
            our social media. These include media for all Computing related events, and special occasions
            such as Valentines, Halloween and Christmas! No prior experience is needed; there will be
            
            initiatives such as workshops to help you get started. Licenses for your Graphic Design needs
            are also provided!`,
          },
        ],
      },
    ],
  }

  return <BaseContainer title={props.name}>
    <RecruitmentDetails {...props}></RecruitmentDetails>
  </BaseContainer>
}

export default Publicity
