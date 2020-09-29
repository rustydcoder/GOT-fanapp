import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Cast from "../components/Cast/Cast";
import Season from "../components/Season/Season";

const Main = (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/casts" component={Cast} />
    <Route path="/seasons" component={Season} />
  </Switch>
);

export default Main;
