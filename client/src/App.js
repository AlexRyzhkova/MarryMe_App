import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToDoPage } from "./pages/ToDoPage";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import GuestsPage from "./pages/GuestsPage";
import Budget from "./pages/Budget";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <SignUpPage />
          </Route>
          <Route path="/todos">
            <ToDoPage />
          </Route>
          <Route path="/budget">
            <Budget />
          </Route>
          <Route path="/guests">
            <GuestsPage />
          </Route>
          <Route path="/main">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
