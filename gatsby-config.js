module.exports = {
  siteMetadata: {
    title: `NUS Students' Computing Club`,
    description: `The website for NUS Students' Computing Club`,
    author: `@jeffsieu`,
  },
  plugins: [
    `gatsby-plugin-top-layout`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-use-dark-mode`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `peopleImages`,
        path: `${__dirname}/src/images/people`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
          placeholder: `blurred`
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NUS Computing Website`,
        short_name: `NUS Computing`,
        start_url: `/`,
        background_color: `#27378F`,
        theme_color: `#27378F`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `Yaml`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content`,
      },
    },
  ],
}
