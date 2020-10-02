import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Input from "./Input";
import Button from "./Button";
import DropDown from "./DropDown";
import { postTodo } from "../../api/postToDo";
import DeleteButton from "../DeleteButton";
import { deleteTodo } from "../../api/deleteToDo";

const Form = ({ topic, placeholder, toDoId, toDo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const toDo = { title, category, description };
    setLoading(true);
    await postTodo(toDo);
  }

  function handleCategoryChange(category) {
    setCategory(category.value);
  }

  async function handleDeleteToDo(event) {
    event.preventDefault();
    await deleteTodo(toDo.id);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        required="required"
        value={title}
        topic="Titel"
        placeholder={toDo ? toDo.title : "neues ToDo"}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <Input
        value={description}
        topic="Beschreibung"
        placeholder={toDo ? toDo.description : "ToDo Beschreibung"}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <DropDown
        category={category}
        handleCategoryChange={handleCategoryChange}
      />
      <DeleteButton type="button" onClick={handleDeleteToDo} />
      <Button type="submit" disabled={!title || loading} />
    </StyledForm>
  );
};

export default Form;

//styling

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #cebebe;
  z-index: 2;
  width: 100%;

  button:first-of-type {
    align-self: flex-end;
    margin-top: 3em;
    padding-right: 2em;
  }
  button:last-of-type {
    margin: 3em 0px;
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
  toDoId: PropTypes.any,
  toDo: PropTypes.any,
  handleDeleteToDo: PropTypes.func,
};
