import React from "react";
import logo from "./logo.svg";
import Home from "./Components/Home";
import Project1 from "./Components/Project1/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router basename="projects">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/project1">
          <Project1 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
