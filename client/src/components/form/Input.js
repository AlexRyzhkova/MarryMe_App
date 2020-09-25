import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Input = ({ topic, type, value, onChange, placeholder }) => {
  return (
    <InputContainer>
      <p>{topic}</p>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
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
  topic: PropTypes.string,
};
