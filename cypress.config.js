const { defineConfig } = require("cypress");

module.exports = defineConfig({
  videoCompression : 15,
  projectId : "uejw5j",
  e2e: {
    baseUrl : "https://heroku-cocomo-frontend-dev.herokuapp.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
 
});



