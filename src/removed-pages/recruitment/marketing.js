import React from 'react'
import BaseContainer from '../../components/base-container'
import { useStaticQuery, graphql } from 'gatsby';
import RecruitmentDetails from '../../components/recruitment-details'

const Marketing = () => {
  const props = {
    name: 'Marketing',
    team: {
      people: [
        {
          name: 'Tean Wei Jun',
          position: 'Director',
        },
        {
          name: 'Oliver Gui',
          position: 'Deputy Director (Sponsorship)',
        },
        {
          name: 'Malcolm Sng',
          position: 'Deputy Director (Merchandise)',
        },
      ],
      query: useStaticQuery(graphql`{
  TeanWeiJun: file(relativePath: {eq: "teanweijun.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 400, height: 250, layout: CONSTRAINED)
    }
  }
  OliverGui: file(relativePath: {eq: "olivergui.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 400, height: 250, layout: CONSTRAINED)
    }
  }
  MalcolmSng: file(relativePath: {eq: "malcolmsng.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 400, height: 250, layout: CONSTRAINED)
    }
  }
}
`),
    },
    sections: [
      {
        title: 'Overview',
        subsections: [
          {
            title: 'Merchandise',
            content: `Do you want to design your very own SoC products and sell them? You’ve come to the right
            place! Join us in our drive to foster a stronger sense of identity in SoC through merchandise. Let
            us make SoC merchandise great again as we go along this journey!`,
          },
          {
            title: 'Sponsorship',
            content: `Are you looking to expand your skillset and reach out to external companies? By joining us, you
            can be sure to take away valuable working soft skills and financially assist SoC through your
            efforts!`,
          },
        ],
      },
      {
        divider: true,
      },
      {
        title: 'Vision',
        subsections: [
          {
            title: 'Merchandise',
            bullets: [
              'Accessbility to goods - Fortnightly delivery/ collection of goods, centralised online catalog',
              'Relevant merchandise - Aesthetically pleasing, functional',
              'Outreach to students - Better branding of products, increase awareness of sale',
            ],
          },
          {
            title: 'Sponsorship',
            bullets: [
              `To uphold our image as the leading Computing School in Asia for our professionalism
              and excellence in nurturing of future generations of the workforce`,
              `To support the Management Committee to the best of our ability to lessen the strain
              they have, to plan better events for the student body`,
              `To nurture and maintain long-lasting relationships with sponsors whose values are
              aligned with the Computing Club’s,`
            ],
            content: `Are you looking to expand your skillset and reach out to external companies? By joining us, you
            can be sure to take away valuable working soft skills and financially assist SoC through your
            efforts!`,
          },
        ],
      },
      {
        divider: true,
      },
      {
        title: 'Goals',
        bullets: [
          `Provide SoC branding merchandise at affordable prices to our SoC students to foster a
          better identity and belonging for them with their home faculty`,
          `Additionally, a pillar of support for the Computing Club and provide them with increased
          funds from generated revenue`,
        ],
      },
      {
        divider: true,
      },
      {
        title: 'Responsibilities',
        subsections: [
          {
            title: 'Merchandise Team',
            subsections: [
              {
                title: 'Marketing and Sales',
                bullets: [
                  'Gather data on students’ preference & buying habits',
                  'Select media platforms that best markets our products',
                  'Produce action plans for marketing campaigns',
                ],
              },
              {
                title: 'Logistics',
                bullets: [
                  'Procurement of goods, sourcing for discounts for bulk purchase from various suppliers',
                  'Manage the stores',
                ],
              },
              {
                title: 'Merchandise',
                bullets: [
                  'Design and produce creative yet practical merchandise',
                ],
              },
              {
                title: 'Outreach/Relations',
                bullets: [
                  'Maintain our integrity across all marketing initiatives',
                  'Preserve a favorable public image for NUS Computing',
                  'Liaise with suppliers, students and publicity members',
                ],
              },
            ],
          },
          {
            title: 'Sponsorship Team',
            bullets: [
              'Manage the sponsorships for Computing Club’s events',
              'Identify potential sponsors aligned with the values of Computing Club',
              'Outreach to and build rapport with sponsors',
              'Work closely with all cells for events',
              'Maintain database of sponsor information',
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

export default Marketing
