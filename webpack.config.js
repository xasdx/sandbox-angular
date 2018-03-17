let path = require("path")

module.exports = {
  entry: path.join(__dirname, "public", "src", "index.js"),
  output: {
    path: path.join(__dirname, "public", "dist"),
    filename: "vendor.js"
  },
  watch: true,
  //devtool: "source-map",
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
  }
}
