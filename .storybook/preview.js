import React from "react";
import { addParameters } from "@storybook/react";
import {
  DocsContainer,
  Title,
  Primary,
  Stories,
} from "@storybook/addon-docs/blocks";
import "../packages/core/src/styles/text.styles.css";
import "./index.css";
import "./icons.css";
import { themes } from '@storybook/theming';

export const parameters = {
  darkMode: {
    current: 'dark',
    dark: { ...themes.dark, appBg: 'black' },
    light: { ...themes.normal, appBg: 'white' },
    stylePreview: true,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
  backgrounds: {
    default: 'dark',
  }
}

addParameters({
  docs: {
    page: () => (
      <>
        <Title />
        <Primary />
        <Stories />
      </>
    ),
    container: DocsContainer,
  },
});
