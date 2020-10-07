import React from "react";

import HeaderSignUp from "./HeaderSignUp";

export default {
  title: "HeaderSignUp",
  component: HeaderSignUp,
};

const Template = (args) => <HeaderSignUp {...args} />;

export const HeaderWithoutMenu = Template.bind({});
HeaderWithoutMenu.args = {};
