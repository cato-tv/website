module.exports = {
  siteMetadata: {
    title: 'Cato',
    siteUrl: 'https://catotv.com/',
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if `false`, this plugin will not use `<CSSReset />
         */
        // isResettingCSS: true,
        // /**
        //  * @property {boolean} [isUsingColorMode=true]
        //  * if `false`, this plugin will not use <ColorModeProvider />
        //  */
        // isUsingColorMode: true,
        // /**
        //  * @property {number} [portalZIndex=40]
        //  * The z-index to apply to all portal nodes. This is useful
        //  * if your app uses a lot z-index to position elements.
        //  */
        // portalZIndex: 40,
      },
    },

    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: '',
    //   },
    // },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -80,
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        icon: 'src/images/cato-icon.png',
      },
    },
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{userAgent: '*', allow: '/'}],
      },
    },
    // {
    //   resolve: `gatsby-plugin-react-helmet-canonical-urls`,
    //   options: {
    //     // siteUrl: `https://emotorad.com`,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/cato-icon.png',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
}
