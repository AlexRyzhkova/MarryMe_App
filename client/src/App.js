import React, { useState } from "react";
import ToDoListItem from "./components/ToDoListItem/ToDoListItem";
import GlobalStyles from "./GlobalStyles";

function App() {
  const title = "Angebot anfordern";
  const category = "Location";
  const [completed, setCompleted] = useState(true);

  return (
    <div>
      <GlobalStyles />
      <ToDoListItem
        title={title}
        category={category}
        completed={completed}
        onCompletedClick={() => setCompleted(!completed)}
      />
    </div>
  );
}

export default App;
