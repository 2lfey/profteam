const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    pageLoadTimeout: 10000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: 'https://dev.profteam.su',
  },

  chromeWebSecurity: false
});
