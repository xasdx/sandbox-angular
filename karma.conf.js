module.exports = (config) => {

  config.set({
    frameworks: ["jasmine"],
    plugins: [
      "karma-jasmine",
      "karma-webpack",
      "karma-phantomjs-launcher"
    ],
    files: [
      "public/src/test.context.js"
    ],
    preprocessors: {
      "public/src/test.context.js": ["webpack"]
    },
    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: "babel-loader",
            query: {
              presets: ["env", "stage-0"],
              plugins: ["transform-decorators-legacy"]
            }
          }
        ]
      },
      watch: true
    },
    webpackServer: { noInfo: true },
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["PhantomJS"],
    singleRun: false
  })
}
