import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "react-dropdown/style.css";
import Form from "../components/form/Form";
import Modal from "../components/Modal";
import styled from "@emotion/styled";

export default function CreateToDo() {
  return (
    <Modal>
      <CreateToDoContainer>
        <Router>
          <Link to="/todos">back</Link>
          <h2>Neues ToDo</h2>
          <Form />
        </Router>
      </CreateToDoContainer>
    </Modal>
  );
}

//styling
const CreateToDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding-bottom: 2em;
  }
`;
