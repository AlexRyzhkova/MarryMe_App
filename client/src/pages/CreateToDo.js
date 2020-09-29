import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";
import "react-dropdown/style.css";

import Form from "../components/form/Form";

export default function CreateToDo() {
  return (
    <div>
      <Router>
        <Link to="/todos">X</Link>
        <h2>Neues To-Do</h2>
        <Form />
      </Router>
    </div>
  );
}
