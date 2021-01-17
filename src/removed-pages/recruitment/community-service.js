import React from 'react'
import BaseContainer from '../../components/base-container'
import { useStaticQuery, graphql } from 'gatsby';
import RecruitmentDetails from '../../components/recruitment-details'

const CommunityService = () => {
  const props = {
    name: 'Community Service',
    team: {
      people: [
        {
          name: 'Kan Yu Xuan',
          position: 'Director',
        },
        {
          name: 'Patricia Foo',
          position: 'Deputy Director',
        },
      ],
      query: useStaticQuery(graphql`
        query {
          KanYuXuan: file(relativePath: { eq: "kanyuxuan.png" }) {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          PatriciaFoo: file(relativePath: { eq: "patriciafoo.jpg" }) {
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
        content: 'The Community Service Cell aims to be the avenue for School of Computing students to serve others so as to positively impact the community. Join us as we embark on this journey to grow and bring joy to the community around us!',
      },
      {
        divider: true,
      },
      {
        title: 'Goals',
        bullets: [
          'To provide an avenue for NUS Computing students to support beneficiaries in need',
          'To empower the disadvantaged communities through imparting knowledge and forging meaningful relationships',
          'To instill a community-oriented spirit by creating a greater awareness of social issues faced by the less fortunate, encourage a voluntary spirit and empower participants to grow from passive observers to become proactive champions of altruism and giving back',
        ],
      },
      {
        divider: true,
      },
      {
        title: 'Responsibilities',
        subsections: [
          {
            title: 'Flag Project Committee',
            content: 'This committee will focus on raising funds for and engaging our beneficiary. Events and activities include fundraising, beneficiary engagement days, Flag Day, and the Rag and Flag Carnival.',
            subsections: [
              {
                title: 'Project Director',
                bullets: [
                  'Oversee fundraisers for our beneficiary',
                  'Oversee engagement sessions for our beneficiary',
                  'Oversee the club’s involvement in the Rag & Flag Carnival',
                  'Be the main point of contact to organise the annual flag day',
                  'To vet and ensure the proposal is within guidelines and submitted on time',
                ],
              },
              {
                title: 'Deputy Project Director',
                bullets: [
                  'Assist the Project Director in the above-mentioned tasks',
                  'Be the main point of contact for the rest of the subcommittee',
                ], 
              },
              {
                title: 'Manpower X 2',
                bullets: [
                  'Recruit student volunteers',
                  'Be the point of contact for the student volunteers',
                  'Allocate manpower during events and activities',
                ],
              },
              {
                title: 'Program Coordinator',
                bullets: [
                  'Plan fundraisers for our beneficiary',
                  'Plan the engagement sessions for our beneficiary',
                  'Plan the club’s involvement in the Rag & Flag Carnival',
                ],
              },
              {
                title: 'Finance & Logistics',
                bullets: [
                  'Settle claims and payments for sub-committee members, student volunteers, and external parties',
                  'Meet logistic requirements for events and activities',
                ],
              },
              {
                title: 'Publicity',
                bullets: [
                  'Meet the aesthetic needs of the events and activities',
                  'Plan for publicity and outreach',
                ],
              },
            ],
          },
          {
            divider: true,
          },
          {
            title: 'Elderly Service Project Committee',
            content: `This committee will focus on a community service project aimed at serving the elderly.
            Recruiting student volunteers with or without relevant expertise.`,
            subsections: [
              {
                title: 'Project Director',
                bullets: [
                  `Facilitate the brainstorming of activities to serve the elderly`,
                  `Oversee the activities on event day with the elderly`,
                  `Choose and liaise with the new beneficiary on our intent to engage them for a CIP programme`,
                  `To vet and ensure the proposal is within guidelines and submitted on time`,
                ],
              },
              {
                title: 'Deputy Project Director',
                bullets: [
                  `Assist the Project Director in overseeing activities with the elderly`,
                ],
              },
              {
                title: 'Manpower',
                bullets: [
                  'Recruit student volunteers',
                  'Be the point of contact for the student volunteers',
                  'Allocate manpower during events and activities',
                ],
              },
              {
                title: 'Programme Coordinator X 2',
                bullets: [
                  `Plan activities with the elderly on the event day`,
                ],
              },
              {
                title: 'Finance & Logistics',
                bullets: [
                  `Settle claims and payments for sub-committee members, student volunteers, and external parties
                  Meet logistic requirements for events and activities`,
                ],
              },
            ],
            bullets: [
              'Manage the sponsorships for Computing Club’s events',
              'Identify potential sponsors aligned with the values of Computing Club',
              'Outreach to and build rapport with sponsors',
              'Work closely with all cells for events',
              'Maintain database of sponsor information',
            ],
          },
          {
            divider: true,
          },
          {
            title: 'Children Service Project Committee',
            content: `This committee will focus on a community service project aimed at serving children in our community.
              Recruiting student volunteers with or without relevant expertise.`,
            subsections: [
              {
                title: 'Project Director',
                bullets: [
                  'Facilitate the brainstorming of activities to serve the children',
                  'Oversee the activities on event day with the children',
                  'Choose and liaise with the new beneficiary on our intent to engage them for a CIP programme',
                  'To vet and ensure the proposal is within guidelines and submitted on time',
                ],
              },
              {
                title: 'Deputy Project Director',
                bullets: [
                  'Assist the Project Director in overseeing activities with the children',
                ],
              },
              {
                title: 'Manpower',
                bullets: [
                  'Recruit student volunteers',
                  'Be the point of contact for the student volunteers',
                  'Allocate manpower during events and activities',
                ],
              },
              {
                title: 'Program Coordinator X 2',
                bullets: [
                  'Plan activities with the children for the event day Finance & Logistics',
                  'Settle claims and payments for sub-committee members, student volunteers, and external parties',
                  'Meet logistic requirements for events and activities',
                ],
              },
            ],
          },
          {
            divider: true,
          },
          {
            title: 'Helpers',
            content: `Interested in volunteering for CIP projects on the ground? Stay tuned for the helper recruitments!`,
            bullets: [
              'Children Service Projects: Code for Community',
              'Elderly Service Projects',
              'Flag Project',
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

export default CommunityService
