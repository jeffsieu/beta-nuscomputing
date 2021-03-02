const express = require(`express`)
const fs = require('fs')
const yaml = require('js-yaml')


exports.onCreateDevServer = ({ app }) => {
  app.use(express.static(`public`))
}

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  fs.readdirSync('./content/').forEach(file => {
    if (file !== 'main') {
      const yamlFile = yaml.load(fs.readFileSync('./content/' + file, 'utf-8'));
      createPage({
        path: '/freshmen/' + yamlFile.path,
        component: require.resolve("./src/templates/fop-template.js"),
        context: {
          pageContent: yamlFile,
          // links: element.links,
        },
      })
    }
  });
}