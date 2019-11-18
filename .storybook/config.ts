import { configure, addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import theme from "./theme";

addDecorator(withA11y);

addParameters({
  options: {
    theme
  }
});

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.tsx?$/), module);
