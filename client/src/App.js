import React from "react";
import ToDoListItem from "./components/ToDoListItem/ToDoListItem";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <ToDoListItem />
    </div>
  );
}

export default App;
