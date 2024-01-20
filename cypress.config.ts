import { defineConfig } from "cypress";
//verify download import
const { isFileExist, findFiles } = require("cy-verify-downloads");

export default defineConfig({
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // verify download import
      on("task", { isFileExist, findFiles });
      // ----------------------
    },
    env: {
      demoVar: "Hello from cypress.config.ts",
      demoQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com",
      Angular: "https://www.globalsqa.com"
    },
  },
  pageLoadTimeout: 60000,
  viewportHeight: 1000,
  viewportWidth: 1400,
});