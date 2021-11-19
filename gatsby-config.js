module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "student-portal",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
};
