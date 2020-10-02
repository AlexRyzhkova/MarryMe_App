import React, { useState } from "react";
import Header from "../components/Header/Header";
import List from "../components/List/List";
import filterIconSrc from "../assets/filter.svg";
import addNewIconSrc from "../assets/addNew.svg";
import styled from "@emotion/styled";
import { getToDo, getTodos } from "../api/fetchToDos";
import CreateToDo from "./CreateToDo";
import useAsync from "../hooks/useAsync";

export const ToDoPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [toDo, setToDo] = useState(null);
  const { data: toDos, error, loading, refetch } = useAsync(getTodos);

  const handleCloseClick = () => {
    setShowModal(false);
    setToDo(null);
  };

  const showDetailModal = async (id) => {
    const toDoDetails = await getToDo(id);
    setToDo(toDoDetails);
    console.log(toDoDetails);
    setShowModal(true);
  };

  return (
    <Container>
      <Header />
      <Main>
        {showModal && (
          <CreateToDo
            handleCloseClick={handleCloseClick}
            onSetShowModal={setShowModal}
            toDo={toDo}
            onRefetch={refetch}
          />
        )}
        <h2>To-Do Liste</h2>
        <img src={filterIconSrc} alt="Filter button" />
        <List
          items={toDos}
          onClick={(id) => showDetailModal(id)}
          error={error}
          loading={loading}
        />
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

const OpenButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: none;
  outline: none;
`;
