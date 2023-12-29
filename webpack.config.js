const path = require("path");
const nodeExternals = require("webpack-node-externals");

/**
 * @type {import("webpack").Configuration}
 */
const configuration = {
  target: "node",
  externalsPresets: {
    node: true,
  },
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  externals: [nodeExternals()],
};

module.exports = configuration;
