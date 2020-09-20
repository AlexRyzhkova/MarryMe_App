import React from "react";

import { ToDoPage } from "./ToDoPage";

export default {
  title: "ToDoPage",
  component: ToDoPage,
};

const Template = (args) => <ToDoPage {...args} />;

export const ToDoList = Template.bind({});
