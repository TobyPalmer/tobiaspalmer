// E2E config file

exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // seleniumServerJar: '../node_modules/selenium/lib/runner/selenium-server-standalone-2.20.0.jar',

  // Base url
  baseUrl: 'http://localhost:9001',

  // Framework
  framework: 'mocha',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Suites
  suites: {
    basictest: ['spec/e2e/*.js']
  },

  // Before tests
  onPrepare: function () {
    browser.driver.manage().window().setSize(1440, 900);
    browser.driver.manage().window().setPosition(0, 0);
  },

  // Mocha options
  mochaOpts: {
    ui: 'bdd',
    reporter: 'spec', //spec, tap, dot, progress, list, nyan, min 
    timeout: 100000
  }
};

if (process.env.SNAP_CI) {
  exports.config.chromeDriver  = '/usr/local/bin/chromedriver';
}
// else{
//   exports.config.chromeDriver  = '/usr/bin/google-chrome';
// }
