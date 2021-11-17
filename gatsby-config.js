require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: "/dikadoin-dong",
  siteMetadata: {
    siteUrl: "https://qitadev.github.io/dikadoin-dong",
    title: "Dikadoin.dong",
    description: "Bagikan kebahagiaan dengan berbagi kisah bersama orang spesial",
    googleSiteVerification: 'HxQVztMq4UZ7ExI-JtxWpgUygnvacrPF4XlZ50SLB5Q'
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-use-query-params',
    'gatsby-plugin-react-helmet',
  ],
};
