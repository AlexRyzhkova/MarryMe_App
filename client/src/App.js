import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToDoPage } from "./pages/ToDoPage";
import CreateToDo from "./pages/CreateToDo";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/todos/createtodo">
            <CreateToDo />
          </Route>
          <Route path="/todos">
            <ToDoPage />
          </Route>
          <Route path="/">Home</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
