const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Mochawesome plugin for generating JSON & HTML reports
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/${browser}', // per-browser folder
    overwrite: false,
    html: true,
    json: true,
  },
  video: true,
  screenshotsFolder: 'cypress/screenshots',
});
