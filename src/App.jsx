import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import FullLyrics from "./components/FullLyrics";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/list" exact component={List} />
        <Route path="/lyrics" exact component={FullLyrics} />
      </Switch>
    </Router>
  );
};

export default App;
