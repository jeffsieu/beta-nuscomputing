const express = require(`express`);
const fs = require('fs');
const yaml = require('js-yaml');

exports.onCreateDevServer = ({ app }) => {
  app.use(express.static(`public`));
};

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  fs.readdirSync('./content/').forEach(file => {
    if (file !== 'main') {
      const event = yaml.load(fs.readFileSync('./content/' + file, 'utf-8'));
      createPage({
        path: `/freshmen/${event.path}`,
        component: require.resolve("./src/templates/fop-template.tsx"),
        context: {
          event: event,
          galleryPath: `/freshmen/${event.path}/gallery/`,
          bannerPath: `/freshmen/${event.path}/banner/`,
        },
      });
    }
  });
};