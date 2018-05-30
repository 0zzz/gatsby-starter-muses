// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/linzhou/Documents/project/gatsby-starter-muses/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/linzhou/Documents/project/gatsby-starter-muses/src/templates/BlogPost.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/linzhou/Documents/project/gatsby-starter-muses/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/linzhou/Documents/project/gatsby-starter-muses/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/linzhou/Documents/project/gatsby-starter-muses/.cache/json/layout-index.json"),
  "blog-3.json": require("/Users/linzhou/Documents/project/gatsby-starter-muses/.cache/json/blog-3.json"),
  "blog-2.json": require("/Users/linzhou/Documents/project/gatsby-starter-muses/.cache/json/blog-2.json"),
  "blog-1.json": require("/Users/linzhou/Documents/project/gatsby-starter-muses/.cache/json/blog-1.json"),
  "404.json": require("/Users/linzhou/Documents/project/gatsby-starter-muses/.cache/json/404.json"),
  "index.json": require("/Users/linzhou/Documents/project/gatsby-starter-muses/.cache/json/index.json"),
  "404-html.json": require("/Users/linzhou/Documents/project/gatsby-starter-muses/.cache/json/404-html.json")
}