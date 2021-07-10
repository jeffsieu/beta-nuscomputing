import React from "react"
import { StaticImage } from "gatsby-plugin-image";
import { useTheme } from "@material-ui/core";

const SmallLogo = () => {
  const theme = useTheme();
  return (
    <StaticImage
      alt='Computing Club Logo'
      src="../images/compclublogosmall.png"
      placeholder="blurred"
      imgStyle={{ objectFit: 'contain' }}
      style={{ width: '24px', height: '24px', filter: theme.palette.type === 'dark' ? 'brightness(3)' : undefined }} />
  );
}

export default SmallLogo