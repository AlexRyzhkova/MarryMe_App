import React from "react";
import deleteIconSrc from "../assets/delete.svg";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const DeleteButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <img src={deleteIconSrc} alt="Dustbin" />
      <p>ToDo löschen</p>
    </StyledButton>
  );
};
export default DeleteButton;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  outline: none;
  border: none;
  cursor: pointer;
  color: grey;
  margin: 0px;
  padding: 0px;
  background-color: Transparent;
  font-size: 0.9em;
  p {
    margin: 0px;
    padding-left: 0.4em;
    align-self: center;
  }
`;

DeleteButton.propTypes = {
  onClick: PropTypes.func,
};
