require("babel-polyfill")

require("zone.js/dist/zone")
require("zone.js/dist/proxy")
require("zone.js/dist/sync-test")
require("zone.js/dist/jasmine-patch")
require("zone.js/dist/async-test")
require("zone.js/dist/fake-async-test")

let context = require.context("./", true, /\.spec\.js$/)
context.keys().forEach(context)
