const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.alovelypairofboots.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;

const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: 'A Lovely Pair Of Boots',
    description:
      "Shauna & Chris are getting married. You're going to want to be there.",
    siteUrl,
    author: ''
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'A Lovely Pair of Boots',
        short_name: 'ALPOB',
        start_url: '/',
        background_color: '#f7f2df',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    {
      resolve: '@sentry/gatsby',
      options: {
        dsn: 'https://273584fcb6ac4444af66e7f5de6481a6@o406725.ingest.sentry.io/6173885',
        sampleRate: 1,
        environment: process.env.NODE_ENV,
        enabled: true
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-6QZ0F2CBMG'],
        pluginConfig: {
          head: true,
          respectDNT: true
        }
      }
    }
  ]
};
