import React, { Suspense } from "react";
import { addParameters } from "@storybook/react";
import {
  DocsContainer,
  Title,
  Primary,
  Stories
} from "@storybook/addon-docs/blocks";
import "../packages/core/src/styles/index.css";
import "../packages/core/src/styles/react-image-crop.css";
import "../packages/icons/src/styles/animations.css";
import "flag-icons/css/flag-icons.min.css";
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
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
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