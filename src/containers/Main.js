import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../components/Home/Home";
import Cast from "../components/Cast/Cast";
import Season from "../components/Season/Season";
import Episode from "../components/Episode/Episode";
import NoMatch from "../components/NoMatch";

const Main = (props) => (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Redirect exact from="/" to="/home" />
    <Route path="/casts" component={Cast} />
    <Route path="/seasons" component={Season} />
    <Redirect from="/season" to="/seasons" />
    <Route path="/:season/episode1" component={Episode} />
    <Redirect from="/:season/episodes" to="/:season/episode1" />
    <Route path="/:season/:ep" component={Episode}/>
    <Route component={NoMatch} />
  </Switch>
);

export default Main;
