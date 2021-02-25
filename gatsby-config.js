
module.exports = {
  siteMetadata: {
    title: `Mi Planta`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
      
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAQrvr1MD1k7qiUvO2YKtP3GBT9aSth_z4",
          authDomain: "miplanta.firebaseapp.com",
          projectId: "miplanta",
          storageBucket: "miplanta.appspot.com",
          messagingSenderId: "368301501386",
          appId: "1:368301501386:web:af3f7e84d645f6b202fd33",
          measurementId: "G-R8WZ45YDKK"
        }
      }
    },

    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require("./miplanta-firebase.json"),
        types: [
          {
            type: 'Users',
            collection: 'users',
            map: doc => ({
              user_id: doc.user_id,
              role: doc.role
            }),
          },
          
        ],
      },
    },
  
  ],
}
