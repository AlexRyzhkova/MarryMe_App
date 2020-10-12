import React from "react";
import Modal from "../components/Modal";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import closeIconSrc from "../assets/close.svg";
import AddNewItemForm from "../components/addNewItemForm/AddNewItemForm";

export default function AddListItem({
  handleCloseClick,
  guest,
  onSetShowModal,
  onRefetch,
}) {
  return (
    <Modal>
      <Container>
        <CloseButton onClick={handleCloseClick}>
          <img src={closeIconSrc} alt="close button" />
        </CloseButton>
        <h2>Neuer Gast</h2>
        <AddNewItemForm
          guest={guest}
          onSetShowModal={onSetShowModal}
          onRefetch={onRefetch}
        />
      </Container>
    </Modal>
  );
}

//styling
const Container = styled.div`
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

AddListItem.propTypes = {
  handleCloseClick: PropTypes.func,
  guest: PropTypes.any,
  onSetShowModal: PropTypes.func,
  onRefetch: PropTypes.func,
};
