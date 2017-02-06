var webpack = require("webpack");
var path = require("path");
 
var DEV = path.resolve(__dirname, "client/dev");
var OUTPUT = path.resolve(__dirname, "client/js");
 
var config = {
  entry: DEV + "/index.jsx",
  output: {
    path: OUTPUT,
    filename: "transpecos.js"
  }
};
 
module.exports = config;