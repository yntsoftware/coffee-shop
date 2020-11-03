module.exports = {
  siteMetadata: {
    title: 'My Coffee Blog'
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    { resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: 'src/blog' }},
    'gatsby-transformer-remark'
  ]
};

