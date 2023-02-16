module.exports = {
  stories: ['../packages/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    "@storybook/addon-essentials",
    "storybook-dark-mode"
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });
    return config;
  }
};