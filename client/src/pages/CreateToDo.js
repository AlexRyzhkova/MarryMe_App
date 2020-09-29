import React, { useState } from "react";
import { postTodo } from "../api/postToDo";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styled from "@emotion/styled";
import deleteIconSrc from "../assets/delete.svg";

export default function CreateToDo() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [infos, setInfos] = useState("");

  const options = [
    "",
    "Location",
    "Musik",
    "Foto/Video",
    "Bekleidung",
    "Blumen und Deko",
    "Einladungen",
    "Sonstiges",
  ];
  const defaultOption = options[0];

  async function handleSubmit(event) {
    event.preventDefault();
    const toDo = { title, category, infos };

    await postTodo(toDo);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleInfosChange(event) {
    setInfos(event.target.value);
  }

  function handleCategoryChange(category) {
    setCategory(category.value);
  }

  return (
    <Container>
      <Link to="/todos">X</Link>
      <h2>Neues To-Do</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <Titel>Titel</Titel>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="neues ToDo"
          />
        </label>
        <label>
          <p>Beschreibung</p>
          <input
            type="text"
            value={infos}
            onChange={handleInfosChange}
            placeholder="ToDo Beschreibung"
          />
        </label>
        <p>Kategorie</p>
        <Category>
          <Dropdown
            options={options}
            onChange={handleCategoryChange}
            value={defaultOption}
            placeholder="Wähle die Kategorie"
          />
        </Category>
        <ButtonLight>Speichern</ButtonLight>
      </form>
      <button>
        <img src={deleteIconSrc} alt="Dustbin" />
        ToDo löschen
      </button>
    </Container>
  );
}

// Styling

const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  grid-template-rows: 10% 10% auto 10% 10% 10%;
  background-color: var(--menu-bg-color);
  height: 100vh;

  h2 {
    grid-column: 2/3;
    grid-row: 1/2;
  }

  /* form {
    padding: 20px;
    font-size: 1.1em;

    /* background-color: hotpink; */

  /* input {
    margin: 20px;
    padding: 5px;
    outline: none;
    border: none;
    width: 200px;
    color: red;
  } */
`;
const Titel = styled.p`
  grid-column: 1/2;
  grid-row: 2/3;
`;
const Category = styled.div`
  width: 200px;
  font-size: 12px;
  margin: 10px 0px 10px 60px;
`;

const ButtonLight = styled.button`
  text-align: center;
  border-radius: 30px;
  margin-top: 80px;
  padding: 5px 15px;
  outline: none;
  border: none;
  background-image: var(--base-bg-color);
  box-shadow: 2px 2px 6px 0px #141313;
  cursor: pointer;
  grid-column: 3/4;
  grid-row: 6/7;

  /* button:hover {
    background-color: #3e8e41;
  }

  button:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  } */
`;
