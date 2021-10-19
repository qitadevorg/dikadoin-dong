require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: "/dikadoin-dong",
  siteMetadata: {
    siteUrl: "https://qitadev.github.io",
    title: "Dikadoin.dong",
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    "gatsby-plugin-use-query-params"
  ],
};
