import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Input from "./Input";
import Button from "./Button";
import DropDown from "./DropDown";
import { postTodo } from "../../api/postToDo";
import DeleteButton from "../DeleteButton";

const Form = ({ topic, placeholder, category }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const toDo = { title, category, description };

    await postTodo(toDo);
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
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
      <DropDown category />
      <DeleteButton />
      <Button type="submit" />
    </StyledForm>
  );
};

export default Form;

//styling

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  button:first-of-type {
    align-self: flex-end;
    margin-top: 3em;
    padding-right: 2em;
  }
  button:last-of-type {
    margin-top: 5em;
    align-self: center;
  }

  div:nth-child(3) {
    align-self: flex-end;
  }
`;

Form.propTypes = {
  placeholder: PropTypes.string,
  topic: PropTypes.string,
  category: PropTypes.string,
};
