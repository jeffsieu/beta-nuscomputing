import React from 'react'
import BaseContainer from '../../components/base-container'
import { useStaticQuery, graphql } from 'gatsby';
import RecruitmentDetails from '../../components/recruitment-details'

const Welfare = () => {
  const props = {
    name: 'Welfare',
    team: {
      people: [
        {
          name: 'Ren Weilin',
          position: 'Director',
        },
        {
          name: 'Fun Wen Yin',
          position: 'Deputy Director',
        },
      ],
      query: useStaticQuery(graphql`{
  RenWeilin: file(relativePath: {eq: "renweilin.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 400, height: 250, layout: CONSTRAINED)
    }
  }
  FunWenYin: file(relativePath: {eq: "funwenyin.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 400, height: 250, layout: CONSTRAINED)
    }
  }
}
`),
    },
    sections: [
      {
        content: 'If you enjoy making life better and more enjoyable for all your peers in School of Computing, then you’ve come to the right place! The welfare cell is looking for fun-loving people who want to make an impact over the next 2 semesters! Join us to plan and facilitate the welfare pack giveaways and maybe even bring your own event ideas into reality!',
      },
      {
        divider: true,
      },
      {
        title: 'Goals',
        bullets: [
          'Boost morale of student body during exam period',
          'Promote mental well-being of students',
          'Provide avenues for students to have fun, bond and relax',
        ],
      },
      {
        title: 'Responsibilities',
        bullets: [
          `Assist the director and deputy director in facilitating the planning and execution for events`,
          `Opportunity to liaise with vendors and work internally with other cells to create other events to promote student life`,
        ],
      },
    ],
  }

  return <BaseContainer title={props.name}>
    <RecruitmentDetails {...props}></RecruitmentDetails>
  </BaseContainer>
}

export default Welfare
