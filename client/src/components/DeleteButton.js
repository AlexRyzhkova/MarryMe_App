import React from "react";
import deleteIconSrc from "../assets/delete.svg";
import styled from "@emotion/styled";

const DeleteButton = () => {
  return (
    <ButtonContainer>
      <img src={deleteIconSrc} alt="Dustbin" />
      <p>To-Do löschen</p>
    </ButtonContainer>
  );
};
export default DeleteButton;

const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  outline: none;
  border: none;
  cursor: pointer;
  color: grey;
  margin: 0px;
  padding: 0px;
  background-color: Transparent;
  p {
    margin: 0px;
    padding-left: 0.4em;
    align-self: center;
  }
`;
