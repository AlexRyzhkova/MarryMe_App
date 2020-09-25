import React, { useState } from "react";
import PropTypes from "prop-types";
// import styled from "@emotion/styled";
// import PropTypes from "prop-types";

const Input = ({ type, value, onChange, placeholder }) => {
  const [title, setTitle] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <label>
      Titel
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="neues ToDo"
      />
    </label>
  );
};
export default Input;

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
