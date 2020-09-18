import React from "react";
import Header from "./components/Header/Header";
import ToDoListItem from "./components/ToDoListItem/ToDoListItem";
import GlobalStyles from "./GlobalStyles";

function App() {
  const title = "Angebot anfordern";
  const category = "Location";
  const [completed, setCompleted] = useState(false);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <h1>Hello</h1>
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
