import React from "react"
import { StaticImage } from "gatsby-plugin-image";

const WhiteLogo: React.FC = () => {
  return (
    <StaticImage
      alt='Computing Club Logo'
      src="../images/compclublogo.png"
      placeholder="blurred"
      imgStyle={{ objectFit: 'contain', maxWidth: '600px'}} />
  );
}

export default WhiteLogo