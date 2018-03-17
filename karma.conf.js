module.exports = (config) => {

  config.set({
    frameworks: ["jasmine"],
    plugins: [
      "karma-jasmine",
      "karma-webpack",
      "karma-phantomjs-launcher",
      "karma-spec-reporter"
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
          },
          {
            test: /(\.html|\.css)$/,
            loader: "raw-loader"
          }
        ]
      },
      watch: true
    },
    webpackServer: { noInfo: true },
    reporters: ["spec"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["PhantomJS"],
    singleRun: false
  })
}
