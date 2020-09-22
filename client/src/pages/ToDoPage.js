import React from "react";
import Header from "../components/Header/Header";
import ToDoList from "../components/List/List";
import filterIconSrc from "../assets/filter.svg";
import addNewIconSrc from "../assets/addNew.svg";
import styled from "@emotion/styled";

export const ToDoPage = () => {
  return (
    <Container>
      <Header />
      <Main>
        <h2>To-Do Liste</h2>
        <img src={filterIconSrc} alt="Filter button" />
        <ToDoList />
        <img src={addNewIconSrc} alt="Plus button" />
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
