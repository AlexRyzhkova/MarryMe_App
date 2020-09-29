import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Input = ({ topic, type, value, onChange, placeholder }) => {
  return (
    <StyledInput>
      <p>{topic}</p>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </StyledInput>
  );
};
export default Input;

const StyledInput = styled.label`
  display: grid;
  grid-template-columns: 1fr 60%;
  width: 100%;
  height: auto;
  margin-bottom: 2em;
  grid-column-gap: 2.5em;

  p {
    margin: 0px;
    grid-column: 1/2;
    justify-self: end;
  }

  input {
    outline: none;
    border: none;
    font-size: 0.9em;
    grid-column: 2/3;
  }
`;

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  topic: PropTypes.string,
};
