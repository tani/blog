const Asciidoctor = require('@asciidoctor/core')()

module.exports = function(eleventyConfig) {
  eleventyConfig.addTemplateFormats("adoc")
  eleventyConfig.addExtension("adoc", {
    compile(_content, inputPath) {
      const document = Asciidoctor.loadFile(inputPath)
      return function(_data) {
        return document.convert({
          to_file: false,
          safe: 'false',
          stem: 'latexmath'
        })
      }
    },
    getData(inputPath) {
      const document = Asciidoctor.loadFile(inputPath)
      return {
        title: document.getTitle(),
        date: document.getRevdate(),
        tags: 'post',
        layout: 'post'
      }
    },
  })
}
