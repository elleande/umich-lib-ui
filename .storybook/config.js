import React from "react";
import path from "path";
import {
  configure,
  getStorybook,
  storiesOf
} from "@storybook/react";

// This should probably go so that we can see components used without any other styling.
// CSS reset and whatnot
//import './styles.css'

import { GlobalStyleSheet } from '../packages/styles'

let getPackageName = filePath =>
  path
    .dirname(filePath)
    .split(path.sep)
    .reverse()[1];

configure(() => {
  // Import all examples from packages.
  const req = require.context(
    "../packages",
    true,
    /^((?!node_modules).)*\.example\.js$/
  );

  req.keys().forEach(pathToExample => {
    const { name, Example } = req(pathToExample);
    storiesOf(getPackageName(pathToExample), module).add(name, () => (
      <React.Fragment>
        <GlobalStyleSheet />
        <Example />
      </React.Fragment>
    ));
  });
}, module);

export { getStorybook };
