import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import List from "../components/List/List";
import filterIconSrc from "../assets/filter.svg";
import addNewIconSrc from "../assets/addNew.svg";
import styled from "@emotion/styled";
import { getTodos } from "../api/fetchToDos";
import CreateToDo from "./CreateToDo";

export const ToDoPage = () => {
  const [toDos, setTodos] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const doGetToDos = async () => {
      const newToDos = await getTodos();
      setTodos(newToDos);
    };
    doGetToDos();
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        {showModal && <CreateToDo />}
        <h2>To-Do Liste</h2>
        <img src={filterIconSrc} alt="Filter button" />
        <List items={toDos} />
        {showModal && (
          <CloseButton onClick={() => setShowModal(false)}>close</CloseButton>
        )}
        <OpenButton onClick={() => setShowModal(true)}>
          <img src={addNewIconSrc} alt="Plus button" />
        </OpenButton>
      </Main>
    </Container>
  );
};

//styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 100vh;
  overflow: auto;
  div:first-child {
    position: sticky;
    top: 0;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  h2 {
    padding: 20px 0 15px 0;
    align-self: center;
  }

  img {
    align-self: flex-end;
    padding: 0 20px 10px 0;
  }
`;

const CloseButton = styled.button`
  z-index: 3;
  background-color: hotpink;
  position: absolute;
  top: 20%;
  left: 20%;
`;

const OpenButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: none;
  outline: none;
`;
