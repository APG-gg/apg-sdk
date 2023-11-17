module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react"],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "babel-plugin-styled-components",
      {
        pure: true,
      },
    ],
  ],
  overrides: [
    {
      "test": "./node_modules/tailwind-merge",
      "presets": []
    }
  ]
};
