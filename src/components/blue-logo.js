import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlueLogo = () => {
  const data = useStaticQuery(graphql`{
  logo: file(relativePath: {eq: "compclublogocolor.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, placeholder: NONE, layout: CONSTRAINED)
    }
  }
}
`)

  if (!getImage(data.logo)) {
    return <div>Picture not found</div>
  }

  return (
    <GatsbyImage
      image={getImage(data.logo)}
      style={{objectFit: 'contain', maxWidth: '600px'}} />
  );
}

export default BlueLogo