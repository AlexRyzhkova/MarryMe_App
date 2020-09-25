import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Input = ({ type, value, onChange, placeholder }) => {
  const [title, setTitle] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <InputContainer>
      <p>Titel</p>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="neues ToDo"
      />
    </InputContainer>
  );
};
export default Input;

const InputContainer = styled.label`
  display: flex;
  flex-direction: row;

  p {
    margin: 0px;
    padding-right: 2.5em;
  }

  input {
    outline: none;
    border: none;
    width: 18em;
  }
`;

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
