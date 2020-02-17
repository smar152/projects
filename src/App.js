import React from "react";
import logo from "./logo.svg";
import Home from "./Components/Home";
import FreeCodeCamp1 from "./Components/FreeCodeCamp1";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      ενα πραμα
      <Router basename="projects">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/freecodecamp1">
            <FreeCodeCamp1 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
