import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import Cast from '../components/Cast/Cast';

const Main = props => <Switch>
   <Route exact path='/' component={Home} />
   <Route path='/cast' component={Cast} />
</Switch>

export default Main;