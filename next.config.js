const withCSS = require("@zeit/next-css");
const withTypescript = require("@zeit/next-typescript");
const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/
});

module.exports = withTypescript(
  withCSS(
    withMDX({
      pageExtensions: ["js", "jsx", "mdx"]
    })
  )
);
