import React from "react";
import "react-dropdown/style.css";
import Form from "../components/form/Form";
import Modal from "../components/Modal";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

export default function CreateToDo({ handleCloseClick, toDo }) {
  return (
    <Modal>
      <CreateToDoContainer>
        <button onClick={handleCloseClick}>close</button>
        <h2>Neues ToDo</h2>
        <Form toDo={toDo} />
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

CreateToDo.propTypes = {
  handleCloseClick: PropTypes.func,
  toDo: PropTypes.any,
};
