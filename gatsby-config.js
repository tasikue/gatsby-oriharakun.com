/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  /* メタデータ */
  siteMetadata: {
    title: `脳内ｵﾘﾊﾗﾊﾟﾗﾀﾞｲｽ`,
    description: `なんかいろいろしてます。モットーは浅く広く。`,
    lang: `ja`,
    siteUrl: `https://oriharakun.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // microCMS
    {
      resolve: `gatsby-source-microcms`,
      options: {
        apiKey: process.env.microCMS_API_KEY,
        serviceId: `oriharakun`,
        apis: [
          {
            endpoint: `blogs`,
          },
          {
            endpoint: `category`,
          },
          {
            endpoint: `tag`,
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `脳内ｵﾘﾊﾗﾊﾟﾗﾀﾞｲｽ`,
        short_name: `オリパラ`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `＃E44D93`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
