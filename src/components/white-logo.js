import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const WhiteLogo = () => {
  const data = useStaticQuery(graphql`{
  logo: file(relativePath: {eq: "compclublogo.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, placeholder: NONE, layout: CONSTRAINED)
    }
  }
}
`)

  if (!data?.logo?.childImageSharp?.gatsbyImageData) {
    return <div>Picture not found</div>
  }

  return (
    <GatsbyImage
      image={data.logo.childImageSharp.gatsbyImageData}
      style={{objectFit: 'contain', maxWidth: '600px'}} />
  );
}

export default WhiteLogo