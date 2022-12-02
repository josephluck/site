const withCSS = require("@zeit/next-css");
const withTypescript = require("@zeit/next-typescript");
const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [],
    hastPlugins: [require("@mapbox/rehype-prism")]
  }
});

module.exports = withTypescript(
  withCSS(
    withMDX({
      target: 'serverless',
      pageExtensions: ["js", "jsx", "mdx"]
    })
  )
);
