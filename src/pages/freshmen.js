import React from 'react';
import FreshmenPage from '../components/freshmen-page';
import BaseContainer from '../components/base-container';
import { graphql, useStaticQuery } from 'gatsby'
export default function() {
  const bannerImage = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {eq: "fopbanner.jpg"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
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
