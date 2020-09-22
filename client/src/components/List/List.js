import React from "react";
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import styled from "@emotion/styled";

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

const ToDoList = () => {
  return (
    <ListContainer>
      {toDos.map((toDo) => (
        <ToDoListItem
          key={toDo.id}
          title={toDo.title}
          category={toDo.category}
          completed={toDo.completed}
          onCompletedClick={toDo.onCompletedClick}
        />
      ))}
    </ListContainer>
  );
};

export default ToDoList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  align-self: center;

  button {
    margin: 5px;
    max-width: 50rem;
  }
`;
