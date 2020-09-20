import React from "react";
import ToDoListItem from "./ToDoListItem";

export default {
  title: "ToDoListItem",
  component: ToDoListItem,
};

const Template = (args) => <ToDoListItem {...args} />;

export const Completed = Template.bind({});
Completed.args = {
  title: "Angebot anfordern",
  category: "Location",
  completed: true,
};

export const Uncompleted = Template.bind({});
Uncompleted.args = {
  title: "Angebot anfordern",
  category: "Location",
  completed: false,
};
