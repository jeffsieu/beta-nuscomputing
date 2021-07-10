import React from 'react'
import BaseContainer from '../../components/base-container'
import { useStaticQuery, graphql } from 'gatsby';
import RecruitmentDetails from '../../components/recruitment-details'

const AcademicLiaison = () => {
  const props = {
    name: 'Academic Liaison',
    team: {
      people: [
        {
          name: 'Tan Shimin',
          position: 'Director',
        },
        {
          name: 'Samuel Fang',
          position: 'Deputy Director',
        },
      ],
      query: useStaticQuery(graphql`{
  TanShimin: file(relativePath: {eq: "shimin.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 400, height: 500, layout: CONSTRAINED)
    }
  }
  SamuelFang: file(relativePath: {eq: "samuelfang.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 400, height: 400, layout: CONSTRAINED)
    }
  }
}
`),
    },
    sections: [
      {
        title: 'Overview',
        content: <div>
          The Academic Liaison cell aims to promote the academic interests and facilitate the academic pursuits of the student body in the School of Computing (SoC). The cell seeks to be the bridge between the student population and the school with regards to academic matters. The cell initiates activities such as Mock Practical Examinations, Academic Day and Hackathons to ensure that students of SoC have enough resources to excel.
          <br/>
          <br/>
          We’d love for you to be a part of the Academic Liaison cell as Project Directors, Vice Project Directors, committee members and helpers. Scroll down to find out more about different roles within the Academic Liaison family! 
        </div>,
      },
      {
        divider: true,
      },
      {
        title: 'Vision',
        bullets: [
          'To form an open community and a strong network of support for all Computing students',
          'To be a robust and encouraging platform for students to explore and experiment',
          'To instil a deep sense of life-long learning amongst students',
          'To prepare the student body to face the problems of tomorrow',
        ],
      },
      {
        divider: true,
      },
      {
        title: 'Responsibilities',
        subsections: [
          {
            title: 'Mock PEs + Lifehack Datathon Committee',
            subsections: [
              {
                title: 'Overview',
                content: <div>
                  1. <b>Mock Practical Examination</b> (Mock PE) aims to simulate, as much as possible, the same conditions and environment during the actual PE. This event is focused on helping freshmen with no prior experience to better prepare for actual programming practical examinations.
                  <br/><br/>
                  <u>Event planning period:</u>
                  <ul>
                    <li>CS1010S/CS1101S/CS1010/CS1010J: AY20/21 Semester 1 Week 8 - Week 12</li>
                    <li>CS1010/CS1010J: AY21/22 Semester 1 Week 3 - Week 10</li>
                  </ul>
                  2. <b>Lifehack Datathon</b> is a small-scale hackathon to provide a platform for students to apply their skills in solving real world problems and possibly leave a positive impact on the community we live in. This event will be conducted during the last month of the Summer Break.

                  <br/>
                  <br/>
                  <u>Event planning period: AY20/21 Semester 2 Week 1 - Mid-July 2021</u>
                </div>
              },
              {
                title: 'Project Director',
                bullets: [
                  'To oversee the execution of the mock PEs for CS1101S, CS1010S, CS1010J, CS1010 as well as the execution of Lifehack Datathon',
                  'Liaison with question-setters to ensure relevancy of event to actual PEs',
                  'To ensure the proposal is done within guidelines and submitted on time',
                  'Ensure the smooth execution of the event',
                ],
              },
              {
                title: 'Vice Project Director',
                bullets: [
                  'Assist Project Director with the tasks stated above',
                  'Coordinate ground efforts in facilitation and invigilation',
                ],
              },
              {
                title: 'Logistics/Finance',
                bullets: [
                  'Make timely requisitions of required equipment',
                  'Ensure requisitions fall within budget allocations',
                  'Coordinate ground efforts in setting up event spaces and equipment',
                ],
              },
              {
                title: 'Programmes',
                bullets: [
                  'Work closely with project directors to ideate on obtaining required content',
                  'Ensure that all content needed is obtained',
                ],
              },
              {
                title: 'Publicity',
                bullets: [
                  'Liaise with the publicity committee',
                  'Ensure that relevant forms of publicity are requested and executed on time',
                ],
              },
              {
                title: 'Manpower',
                bullets: [
                  'Manage the recruitment process of helpers',
                  'Ensure proper and timely dissemination of event details to the relevant helpers',
                ],
              },
            ],
          },
          {
            divider: true,
          },
          {
            title: 'Winter Workshop + Academic Day Committee',
            subsections: [
              {
                title: 'Overview',
                content: <div>
                  1. <b>Winter Workshops 2020</b> aims to prepare students for the upcoming modules. In particular, the targeted audience for the programming workshops are the SoC freshmen who are taking either CS2030, CS2040, CS2040S, or CS2040C; and the targeted audience for the mathematics workshop are the SoC students who are taking MA1101R or MA1521. The event will be held during the winter break.

                  <br/>
                  <br/>
                  <u>Event planning period: AY20/21 Semester 1 Week 8 - 3rd Week of December</u>

                  <br/>
                  <br/>
                  2. <b>Academic Day 2021</b> will be a full day event that is jointly organised with the School of Computing (SoC)’s Undergraduate’s Office to introduce student life in SoC to incoming freshmen. The event will include talks from both faculty and senior students on academic essentials and will give freshmen an opportunity to familiarise themselves with the school and interact with the faculty, seniors and year-mates

                  <br/>
                  <br/>
                  <u>Event planning period: AY20/21 Semester 2 Week 1 - Mid-July 2021</u>
                </div>,
              },
              {
                title: 'Project Director',
                bullets: [
                  'To oversee the execution of the above events',
                  'Ensure the proposals are done and submitted within guidelines',
                  'To liaise with the tutors and ensure the flow of events during execution',
                ],
              },
              {
                title: 'Vice Project Director',
                bullets: [
                  'Assist Project Director with the tasks stated above',
                  'Liaise with professors in-charge and tutors to ensure workshop content is manageable and relevant to attendees',
                  'Coordinate ground efforts in setting up equipment',
                ],
              },
              {
                title: 'Logistics/Finance',
                bullets: [
                  'Make timely requisitions of required equipment',
                  'Ensure requisitions fall within budget allocations',
                  'Coordinate ground efforts in setting up event spaces and equipment',
                ],
              },
              {
                title: 'Programmes',
                bullets: [
                  'Work closely with project directors to ideate on contents to be included',
                  'Work with the manpower team to ensure that relevant personnel are recruited',
                ],
              },
              {
                title: 'Publicity',
                bullets: [
                  'Liaise with the publicity committee',
                  'Ensure that relevant forms of publicity are requested and executed on time',
                ],
              },
              {
                title: 'Manpower',
                bullets: [
                  'Manage the recruitment process of helpers',
                  'Ensure proper and timely dissemination of event details to the relevant helpers',
                ],
              },
            ]
          },
          {
            divider: true,
          },
          {
            title: 'Career Launchpad Commitee',
            content: <div>
              <b>Career Launchpad 2021</b> aims to provide career related information and skills and assist students in their career preparations. It aims to equip students with the skills and tools required to stand out in an increasingly competitive job market, and facilitate the sharing and discussion of various sectors within the computing industry between students and professionals

              <br/>
              <br/>
              <u>Event planning period: AY20/21 Semester 1 Week 8 - Semester 2 Week 3</u>
            </div>,
            subsections: [
              {
                title: 'Project Director',
                bullets: [
                  'To plan the itinerary of Career Launchpad',
                  'Ensure the smooth flow of events',
                ],
              },
              {
                title: 'Vice Project Director',
                bullets: [
                  'Assist PD with tasks above mentioned',
                  'Coordinate ground efforts in preparing event spaces and facilitation',
                ],
              },
              {
                title: 'Logistics/Finance',
                bullets: [
                  'Make timely requisitions of required equipment',
                  'Ensure requisitions fall within budget allocations',
                  'Coordinate ground efforts in setting up event spaces and equipment',
                ],
              },
            ]
          },
          {
            divider: true,
          },
          {
            title: 'Helpers',
            content: 'Interested in helping out in any of the events as facilitators, teachers or even moderators? Feel free to indicate your interest in the form as well! We’ll contact you with more details closer to the event date :)',
          },
        ],
      },
    ],
  }

  return <BaseContainer title={props.name}>
    <RecruitmentDetails {...props}></RecruitmentDetails>
  </BaseContainer>
}

export default AcademicLiaison
