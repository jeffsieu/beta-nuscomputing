import React from 'react'
import BaseContainer from '../../components/base-container'
import { useStaticQuery, graphql } from 'gatsby';
import RecruitmentDetails from '../../components/recruitment-details'

const StudentRelations = () => {
  const props = {
    name: 'Student Relations',
    team: {
      people: [
        {
          name: 'Gu Geng',
          position: 'Director',
        },
        {
          name: 'Ivan Koh',
          position: 'Deputy Director',
        },
      ],
      query: useStaticQuery(graphql`
        query {
          GuGeng: file(relativePath: { eq: "gugeng.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          IvanKoh: file(relativePath: { eq: "ivankoh.jpg" }) {
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
        content: 'Student relations is about creating a fun and inclusive environment in SOC. Join us to plan exciting events and help build long lasting friendships among computing students.',
      },
      {
        title: 'Vision',
        content: 'Leave no one in SOC behind',
      },
      {
        title: 'Mission',
        content: 'To spread FUN and BUILD relationships in the SOC community through various events.',
      },
      {
        divider: true,
      },
      {
        title: 'Who we are looking for',
        bullets: [
          'If you are someone with event-planning experiences,',
          'or someone with brilliant ideas to share and fun initiates that you want to implement for the rest of SOC students,',
          'or simply someone with passion to connect and to rejuvenate the community',
        ],
      },
      {
        
        content: 'WAIT NO MORE AND JOIN US!',
      },
      {
        title: 'Events',
        bullets: [
          'Computing Day - a SPECIAL day for ALL OF US, only the students of SOC!',
          'Meliorium - amazing and fun activities for you and your friends to make even MORE friends! (e.g. Amazing Race & Escape Room)',
          'X men - Facilitate small interest groups formation and provide funding for offline bondings (WOW!)',
          'Initiate your own new event! - And much more fun that you WISH to see and bring to the SOC!',
        ],
      },
      {
        divider: true,
      },
      {
        title: 'Responsibilities',
        subsections: [
          {
            title: 'Project Director',
            bullets: [
              'To spearhead and oversee the planning for a major event',
              'To coordinate work among the rest of project members',
            ],
          },
          {
            title: 'Vice Project Director',
            bullets: [
              'To assist project director in the planning of a major event',
              'To be in charge of admin/manpower/finance/logistics aspects of the event',
            ],
          },
          {
            title: 'Project Manager',
            bullets: [
              'To be involved in some aspects of the event planning process',
              'To assist in the management of admin/manpower/finance/logistics aspects of the event',
            ],
          },
          {
            title: 'Onsite Manager',
            bullets: [
              'To be involved in some aspects of the event planning process',
              'To ensure the smooth running of the actual events and make sure changes/needs are immediately attended to',
            ],
            subsections: [
              {
                content: 'P.S. dont be afraid to take up more than one role or get involved in more than one event!!',
              },
            ],
          },
        ],
      },
    ],
  }

  return <BaseContainer title={props.name}>
    <RecruitmentDetails {...props}></RecruitmentDetails>
  </BaseContainer>
}

export default StudentRelations
