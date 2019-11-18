const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = ({ config, mode }) => {
  console.log(mode);
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Compile typescript + typescript add-on support
  config.module.rules.push({
    test: /\.ts$|\.tsx$/,
    use: [
      {
        loader: require.resolve("ts-loader")
      },
      {
        loader: require.resolve("react-docgen-typescript-loader")
      }
    ]
  });

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });

  config.resolve.extensions.push(".ts", ".tsx", ".css", ".scss");

  // Return the altered config
  return config;
};
