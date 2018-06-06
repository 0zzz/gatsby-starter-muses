const path = require("path");
const { cssModulesConfig } = require(`gatsby-1-config-css-modules`);
const { extractTextPlugin } = require(`gatsby-1-config-extract-plugin`);
const resources = path.join(__dirname, './src/style/index.scss');

exports.modifyWebpackConfig = ({ config, stage }) => {
  const sassFiles = /\.s[ac]ss$/
  const sassModulesFiles = /\.module\.s[ac]ss$/
  const sassLoader = `sass`;
  const sassResourcesLoader = `sass-resources-loader`;

  switch (stage) {
    case "develop":
      config.loader(`sass`, {
        test: sassFiles,
        exclude: sassModulesFiles,
        loaders: [`style`, `css`, sassLoader, sassResourcesLoader],
      });

      config.loader(`sassModules`, {
        test: sassModulesFiles,
        loaders: [`style`, cssModulesConfig(stage), sassLoader, sassResourcesLoader],
      });
      break;
    case "build-css":
      config.loader(`sass`, {
        test: sassFiles,
        exclude: sassModulesFiles,
        loader: extractTextPlugin(stage).extract([`css?minimize`, sassLoader, sassResourcesLoader]),

      });

      config.loader(`sassModules`, {
        test: sassModulesFiles,
        loader: extractTextPlugin(stage).extract(`style`, [
          cssModulesConfig(stage),
          sassLoader,
          sassResourcesLoader,
        ]),
      });
    break;


    case "build-html":
      config.loader("null", {
        test: /amfe-flexible/,
        loader: "null-loader",
      });


    case "build-javascript":
      config.loader(`sass`, {
        test: sassFiles,
        exclude: sassModulesFiles,
        loader: `null`,
      });

      config.loader(`sassModules`, {
        test: sassModulesFiles,
        loader: extractTextPlugin(stage).extract(`style`, [
          cssModulesConfig(stage),
          sassLoader,
          sassResourcesLoader,
        ]),
      });
      // config.loader(`sassModules`, {
      //   test: sassModulesFiles,
      //   loader: extractTextPlugin(stage).extract('style', [ cssModulesConfig(stage), sassLoader, sassResourcesLoader]),
      // });
      break;
  }

  config.merge({
    sassResources: resources,
  });
  return config;
};
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/BlogPost.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      });
    });
  });
};
