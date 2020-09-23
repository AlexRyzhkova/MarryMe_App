import React, { useState } from "react";
import { postTodo } from "../api/postToDo";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function CreateToDo() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const options = [
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
    const toDo = { title, category };

    await postTodo(toDo);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleCategoryChange(category) {
    setCategory(category.value);
  }

  return (
    <div>
      <h2>Neues To-Do</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Titel
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="neues ToDo"
          />
        </label>
        <label>
          <Dropdown
            options={options}
            onChange={handleCategoryChange}
            value={defaultOption}
            placeholder="Wähle die Kategorie"
          />
        </label>
        <button>Speichern</button>
      </form>
      <Link to="/todos">ToDoPage</Link>
    </div>
  );
}
