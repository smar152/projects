import React, { useRef } from "react";
import Home from "./Projects/Home";
import Project1 from "./Projects/Project1/Main";
import Brackets from "./Projects/Brackets/Brackets";
import WaffleBowlMaker from "./Projects/WaffleBowlMaker/WaffleBowlMaker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AwesomeWritingPrompt from "./Projects/AwesomeWritingPrompt/AwesomeWritingPrompt";

function App({ rolling }) {
  return (
    <Router basename="projects">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/project1">
          <Project1 />
        </Route>
        <Route path="/brackets">
          <Brackets />
        </Route>
        <Route path="/waffleBowlMaker">
          <WaffleBowlMaker />
        </Route>
        <Route path="/awesomeWritingPrompt">
          <AwesomeWritingPrompt />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
