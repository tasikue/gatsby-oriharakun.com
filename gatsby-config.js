/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  /* メタデータ */
  siteMetadata: {
    title: `脳内ｵﾘﾊﾗﾊﾟﾗﾀﾞｲｽ`,
    description: `なんかいろいろしてます。モットーは浅く広く。`,
    lang: `ja`,
    author: `oriharakun`,
    siteUrl: `https://oriharakun.com/`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recommens`,
        path: `${__dirname}/src/contents/recommends`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
        ],
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
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://oriharakun.com/`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      ortions: {
        host: `https://oriharakun.com/`,
        sitemap: `https://oriharakun.com/sitemap-index.xml`,
        policy: [{ useAgent: `*`, allow: `/` }]
      },
    },
  ],
}
