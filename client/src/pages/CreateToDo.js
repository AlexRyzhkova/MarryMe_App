import React from "react";
import "react-dropdown/style.css";
import Form from "../components/form/Form";
import Modal from "../components/Modal";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import closeIconSrc from "../assets/close.svg";

export default function CreateToDo({
  handleCloseClick,
  toDo,
  onSetShowModal,
  onRefetch,
}) {
  return (
    <Modal>
      <CreateToDoContainer>
        <CloseButton onClick={handleCloseClick}>
          <img src={closeIconSrc} alt="close button" />
        </CloseButton>
        <h2>Neues ToDo</h2>
        <Form
          toDo={toDo}
          onSetShowModal={onSetShowModal}
          onRefetch={onRefetch}
        />
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
const CloseButton = styled.button`
  background: transparent;
  border: none;
  align-self: flex-start;
  outline: none;
  cursor: pointer;
`;

CreateToDo.propTypes = {
  handleCloseClick: PropTypes.func,
  toDo: PropTypes.any,
  onSetShowModal: PropTypes.func,
  onRefetch: PropTypes.func,
};
