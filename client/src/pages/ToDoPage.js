import React from "react";
import Header from "../components/Header/Header";
import ToDoList from "../components/List/List";

export const ToDoPage = () => {
  return (
    <>
      <Header />
      <main>
        <h2>ToDo Liste</h2>
        <ToDoList />
      </main>
    </>
  );
};
