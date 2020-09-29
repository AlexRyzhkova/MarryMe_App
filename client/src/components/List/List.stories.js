import React from "react";
import List from "./List";

export default {
  title: "List",
  component: List,
};
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
    completed: true,
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
  {
    id: 5,
    title: "Kleid auswählen",
    category: "Bekleidung",
    completed: false,
  },
  {
    id: 6,
    title: "Menü abstimmen",
    category: "Location",
    completed: false,
  },
  {
    id: 7,
    title: "Kleid auswählen",
    category: "Bekleidung",
    completed: false,
  },
  {
    id: 8,
    title: "Menü abstimmen",
    category: "Location",
    completed: false,
  },
];

export const ListAllItems = () => <List items={toDos} />;

export const Empty = () => <List items={null} />;
