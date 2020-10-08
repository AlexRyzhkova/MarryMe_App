import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToDoPage } from "./pages/ToDoPage";
import Home from "./pages/Home";
import Menu from "./components/menu/Menu";
import SignUpPage from "./pages/SignUpPage";
import GuestsPage from "./pages/GuestsPage";
import AddListItem from "./pages/AddListItem";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/account">
            <SignUpPage />
          </Route>
          <Route path="/todos">
            <ToDoPage />
          </Route>
          <Route path="/guests">
            <GuestsPage />
          </Route>
          <Route path="/newguest">
            <AddListItem />
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
