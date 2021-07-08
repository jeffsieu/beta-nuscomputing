import React from 'react'
import BaseContainer from '../../components/base-container'
import { useStaticQuery, graphql } from 'gatsby';
import RecruitmentDetails from '../../components/recruitment-details'

const Sports = () => {
  const props = {
    name: 'Sports',
    team: {
      people: [
        {
          name: 'Renee Lee',
          position: 'Director',
        },
        {
          name: 'Lim Yu Long',
          position: 'Deputy Director',
        },
      ],
      query: useStaticQuery(graphql`{
  ReneeLee: file(relativePath: {eq: "reneelee.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 400, height: 250, layout: CONSTRAINED)
    }
  }
  LimYuLong: file(relativePath: {eq: "limyulong.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 400, height: 250, layout: CONSTRAINED)
    }
  }
}
`),
    },
    sections: [
      {
        content: 'Hi all! Being in the sports comm is a unique role as compared to other committees. Our committee will be a year long commitment when the sports events occur. Nonetheless rest assured that it will not affect your studies as the sports events only happen off semester!',
      },
      {
        content: `Whether you're looking to develop new skills, experience leadership roles or
        make lifelong friends, sports cell provides the opportunity for that! As a member of
        the sports cell, you may choose to take up the role in Finance, Marketing and/or Operations.
        You could be a jack of all trades, or simply a master of one! The sports comm will also be supporting the
        events by providing the events with manpower like being a referee, game master or welfare. Really,
        you can take up any role deemed necessary and relevant! So if you would like to challenge yourself,
        what are you waiting for? Sign up for sports comm now!In the event where you have ANY ideas for interesting projects,
        or if you would like to take on the role of a Project Director for existing projects, feel free to approach us any time!
        The events that we will be organising are namely the Computing Sports Carnival, Night Cycling and many more!
        `,
      },
      {
        divider: true,
      },
      {
        title: 'Vision',
        content: 'We hope to foster camaraderie within the computing community and providing a platform for people of similar interests to come together through sports. p.s. Say real, university is already stressful enough, so just have fun and develop yourself HOLISTICALLY.',
      },
      {
        title: 'Goals',
        bullets: [
          'Promote a strong work-life balance amongst computing students.',
          'Provide a platform for all students (be it sports enthusiasts, recreational players or beginners) to partake in fun-filled activities.',
        ],
      },
    ],
  }

  return <BaseContainer title={props.name}>
    <RecruitmentDetails {...props}></RecruitmentDetails>
  </BaseContainer>
}

export default Sports
