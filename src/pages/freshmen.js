import React from 'react';
import FreshmenPage from '../components/freshmen-page';
import BaseContainer from '../components/base-container';
import { graphql, useStaticQuery } from 'gatsby'
export default function() {
  const bannerImage = useStaticQuery(graphql`{
  allFile(filter: {relativePath: {eq: "fopbanner.jpg"}}) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}
`).allFile.edges[0].node;
  return <BaseContainer title='Freshmen Orientation Camps' background={bannerImage}>
    <FreshmenPage></FreshmenPage>
  </BaseContainer>
}
