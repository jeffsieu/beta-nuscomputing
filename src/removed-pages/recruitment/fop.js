import React from 'react'
import BaseContainer from '../../components/base-container'
import { useStaticQuery, graphql } from 'gatsby';
import RecruitmentDetails from '../../components/recruitment-details'

const FOP = () => {
  const props = {
    name: 'FOP (Freshmen Orientation Project)',
    team: {
      people: [
        {
          name: 'Raveen Prabhu',
          position: 'Director',
        },
        {
          name: 'Lo Zhao Wei',
          position: 'Deputy Director',
        },
      ],
      query: useStaticQuery(graphql`
        query {
          RaveenPrabhu: file(relativePath: { eq: "raveen.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          LoZhaoWei: file(relativePath: { eq: "zhaowei.jpg" }) {
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
        content: 'Enjoyed yourself during Orientation and itching for more? Or simply looking for a fun, exciting and fulfilling journey in computing club? Look no further! The Freshmen Orientation Projects (FOP) cell is finally recruiting passionate individuals to join us in planning orientation events for our freshmen next year. As a FOP sub-committee member, you will be given the opportunity to bring your ideas to life by conceptualising and organizing the various events. Also, no prior experience in planning is required!',
      },
      {
        divider: true,
      },
      {
        title: 'Events',
        subsections: [
          {
            title: '1. Freshmen Social Camp ',
          },
          {
            title: '2. Freshmen Orientation Week',
            content: 'FSC is an amazing opportunity for you to meet new friends in School of Computing. By being in this Committee, you will get the opportunity to experience something extremely fun and exciting!',
          },
          {
            title: '3. BASH',
            content: 'BASH is a Freshmen Orientation Project that marks the end of FOP. It serves as an opportunity for participants of Freshmen Camps (FSC, FOC & FOW) to have a memorable night out with friends they have made throughout FOP. It also provide more opportunities for both seniors and freshmen to interact and forge friendships. By being part of this committee, not only do you get to experience planning it, you also get to experience one of the most memorable nights u might possibly have here at NUS.',
          },
          {
            title: '4. eFOP',
            content: 'Plan a virtual orientation programme for incoming freshmen. This provides everyone an opportunity to take part in an orientation programme and make friends, if they are unable to make it physically for the other events.',
          },
          {
            title: 'Responsibilities',
            subsections: [
              {
                title: 'Project Director',
                bullets: [
                  'Ensure smooth planning and running of the actual event and that all deadlines are met',
                ],
              },
              {
                title: 'Vice Project Director',
                bullets: [
                  'Assist the Project Director in meeting the objectives of the event',
                ],
              },
              {
                title: 'Programme & Logistics Team',
                bullets: [
                  'Plans all activities, logistics and facilities, including safety considerations and subsequent implementation'
                ],
              },
              {
                title: 'Administrative Team',
                bullets: [
                  'Handles all administrative matters with regards to manpower and finance',
                ],
              },
            ],
          },
          {
            divider: true,
          },
          {
            title: '5. Rag',
            content: 'Rag is an event organised by NUSSU where freshmen from every faculty will compete across faculties by putting up a dance performance. By being part of the Rag Committee, you get the chance to interact with your juniors next year and help them put up a good performance.',
            subsections: [
              {
                title: 'Responsibilities',
                subsections: [
                  {
                    title: 'Project Director',
                    bullets: [
                      'Ensure smooth planning and running of the actual event and that all deadlines are met',
                    ],
                  },
                  {
                    title: 'Creative Team',
                    bullets: [
                      'Put your creative side into good use by making the dance performance as unique and as beautiful as you wish',
                    ],
                  },
                  {
                    title: 'Float Team',
                    bullets: [
                      'Put your artistics skill into good use by decorating and designing all the props needed.',
                    ],
                  },
                  {
                    title: 'Dance Team',
                    bullets: [
                      'Choregraph all the dance items and train the freshmen to showcase their performance.',
                    ],
                  },
                  {
                    title: 'Make-up and Costumes Team',
                    bullets: [
                      'Design the Cosutumes for the various dances and assist in applying make up fr the dancers.',
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        divider: true,
      },
      {
        title: 'Administrative Instructions',
        content: 'Interview for Project Directors and Sub Committee members will be conducted during week 7. We will be contacting you directly to arrange a slot with you. :)',
      }
    ],
  }

  return <BaseContainer title={props.name}>
    <RecruitmentDetails {...props}></RecruitmentDetails>
  </BaseContainer>
}

export default FOP
