import React from "react";

import ToDoListItem from "./ToDoListItem";

export default {
  title: "ToDoListItem",
  component: ToDoListItem,
};

const Template = (args) => <ToDoListItem {...args} />;

const toDos = [
  {
    id: 1,
    title: "Angebot anfordern",
    category: "Location",
    completed: false,
  },
  {
    id: 2,
    title: "Dj anrufen",
    category: "Musik",
    completed: false,
  },
  {
    id: 3,
    title: "Kleid auswählen",
    category: "Bekleidung",
    completed: false,
  },
  {
    id: 4,
    title: "Menü abstimmen",
    category: "Location",
    completed: false,
  },
];

export const Completed = Template.bind({});
Completed.args = {
  title: "Angebot anfordern",
  category: "Location",
  completed: true,
};
export const Uncompleted = Template.bind({});
Uncompleted.args = {
  title: "Angebot anfordern",
  category: "location",
  completed: false,
};

export const List = () => (
  <div>
    {toDos.map((toDo) => (
      <ToDoListItem
        key={toDo.id}
        title={toDo.title}
        category={toDo.category}
        completed={toDo.completed}
      />
    ))}
  </div>
);
