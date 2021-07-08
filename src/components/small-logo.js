import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const SmallLogo = () => {
  const data = useStaticQuery(graphql`{
  placeholderImage: file(relativePath: {eq: "compclublogosmall.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, placeholder: NONE, layout: CONSTRAINED)
    }
  }
}
`)

  if (!data?.placeholderImage?.childImageSharp?.gatsbyImageData) {
    return <div>Picture not found</div>
  }

  return (
    <GatsbyImage
      image={data.placeholderImage.childImageSharp.gatsbyImageData}
      imgStyle={{objectFit: 'contain'}}
      style={{width: '24px', height: '24px'}} />
  );
}

export default SmallLogo