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

const ToDoList = () => {
  return (
    <ListContainer>
      {toDos.map((toDo) => (
        <ToDoListItem
          key={toDo.id}
          title={toDo.title}
          category={toDo.category}
          completed={toDo.completed}
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

  button {
    margin: 5px;
  }
`;
