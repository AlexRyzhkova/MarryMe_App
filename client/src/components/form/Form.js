import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Input from "./Input";
import Button from "./Button";
import DropDown from "./DropDown";

const Form = ({ topic, placeholder }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <FormContainer>
      <Input
        value={title}
        topic="Titel"
        placeholder="neues ToDo"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <Input
        value={description}
        topic="Beschreibung"
        placeholder="ToDo Beschreibung"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <DropDown />
      <Button />
    </FormContainer>
  );
};

export default Form;

//styling

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
  /* margin: 2em; */

  button {
    margin-top: 5em;
  }
  div:nth-child(3) {
    align-self: flex-end;
  }
`;

Form.propTypes = {
  placeholder: PropTypes.string,
  topic: PropTypes.string,
};
