import React from "react";
import ToDoListItem from "./ToDoListItem";

export default {
  title: "ToDoListItem",
  component: ToDoListItem,
};

export const Completed = () => (
  <ToDoListItem title="Angebot anfordern" category="Location" completed />
);

export const Uncompleted = () => (
  <ToDoListItem
    title="Angebot anfordern"
    category="Location"
    completed={false}
  />
);
