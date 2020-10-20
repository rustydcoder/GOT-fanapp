import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Cast from "../components/Cast/Cast";
import Season from "../components/Season/Season";
import Episode from "../components/Episode/Episode"

const Main = (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/casts" component={Cast} />
    <Route path="/seasons" component={Season} />

        <Route path={`/:id/episodes`} component={Episode} />
  </Switch>
);

export default Main;
