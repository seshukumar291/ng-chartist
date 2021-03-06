process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      {
        pattern: 'config/spec-bundle.js',
        watched: false
      }
    ],
    exclude: [],
    preprocessors: {
      'config/spec-bundle.js': ['webpack']
    },
    client: {
      captureConsole: false
    },
    webpack: require('./config/webpack.test'),
    webpackMiddleware: {
      noInfo: true,
      stats: {
        chunks: false
      }
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};
