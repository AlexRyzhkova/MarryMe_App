import React from "react";
import List from "./List";

export default {
  title: "List",
  component: List,
};

const Template = (args) => <List {...args} />;

export const ListAllItems = Template.bind({});
ListAllItems.args = <List />;
