// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   reporter: 'cypress-mochawesome-reporter', // for gen HTML reports
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       // Video 20 - HTML Reports
//       require('cypress-mochawesome-reporter/plugin')(on); // for HTML reports
//     },

//   },
// });


// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here if needed
//     },
//     baseUrl: 'https://staging.cblevelup.com/login', // You can update this as needed
//   },
// });

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    baseUrl: 'https://staging.cblevelup.com/login', // You can update this as needed
  },
});
