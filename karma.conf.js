module.exports = (config) => {

  config.set({
    frameworks: ["jasmine"],
    plugins: [
      "karma-jasmine",
      "karma-phantomjs-launcher"
    ],
    files: [
      "public/src/**/*.spec.js"
    ],
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["PhantomJS"],
    singleRun: false
  })
}
