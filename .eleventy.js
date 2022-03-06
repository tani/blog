module.exports = function(eleventyConfig) {
  let md = require('markdown-it')({
    html: true,
    linkify: true
  })
  md = md.use(require('markdown-it-pfm'))
  eleventyConfig.setLibrary('md', md)
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'))
}
