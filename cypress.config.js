const { defineConfig } = require("cypress");
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.resolve('D://cypress_Caps//cypress', '.env') });

module.exports = defineConfig({

  
   e2e: {
    specPattern: 'cypress/integration/**/*.cy.js',

    pageLoadTimeout:60000,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.username = process.env.email;
      config.env.password = process.env.password;

      return config ;
    },
    // pageLoadTimeout: 700000,
     screenshotsFolder: 'cypress/screenshots', // Folder where screenshots are saved
     screenshotOnRunFailure: true,
    
    // testIsolation : true,
    },
});
