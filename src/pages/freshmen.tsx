import React from 'react';
import FreshmenPage from '../components/freshmen-page';
import BaseContainer from '../components/base-container';
import { graphql, useStaticQuery } from 'gatsby'
import { FreshmenPageBannerQuery } from '../types/gatsby-types';
import { getImage, ImageDataLike } from 'gatsby-plugin-image';

export default function Freshmen () {
  const bannerImage = useStaticQuery<FreshmenPageBannerQuery>(graphql`
    query freshmenPageBanner {
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
  return <BaseContainer title='Freshmen Orientation Camps' background={getImage(bannerImage as ImageDataLike)!}>
    <FreshmenPage></FreshmenPage>
  </BaseContainer>
}
