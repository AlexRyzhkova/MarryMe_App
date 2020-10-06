import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToDoPage } from "./pages/ToDoPage";
import CreateToDo from "./pages/CreateToDo";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/todos/createtodo">
            <CreateToDo />
          </Route>
          <Route path="/account">
            <SignUpPage />
          </Route>
          <Route path="/todos">
            <ToDoPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
