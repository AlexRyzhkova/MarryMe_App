import React from "react";
import GlobalStyles from "../src/GlobalStyles";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};
const withGlobalStyles = (Story, context) => {
  return (
    <>
      <GlobalStyles />
      <Story {...context} />
    </>
  );
};

export const decorators = [withGlobalStyles];
