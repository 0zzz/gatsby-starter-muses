module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Muses',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
    resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/post`,
        name: "markdown-pages",
      },
    },
    {
    resolve: `gatsby-plugin-react-css-modules`,
    options: {
      filetypes: {
        ".scss": { syntax: `postcss-scss` },
      },
      exclude: `\/global\/`,
    },
  },
    'gatsby-transformer-remark'
  ],
}
