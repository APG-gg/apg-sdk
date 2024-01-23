const path = require('path');

module.exports = {
  stories: ['../packages/**/*.stories.tsx'],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-styling',
      options: {
         implementation: require("postcss"),
      },
    },
    // {
    //   name: "@storybook/addon-postcss",
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require("postcss"),
    //     },
    //   },
    // },
  ],

  features: {
    storyStoreV7: false,
  },

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            import: false,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  docs: {
    autodocs: true
  }
};
