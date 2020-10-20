import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import Episode from "../Episode/Episode";

export const Summary = (props) => {
  const { summary, number } = props;

  let { path, url } = useRouteMatch();
  return (
    <div>
      <div className="text-center">
        <div className="p-2">
          <p>{summary ? summary : "No Storyline"}</p>
          <Link
            to={`${url}/season${number}/episodes`}
            className="btn btn-primary"
          >
            Episodes
          </Link>
        </div>
      </div>

      <Switch>
        <Route path={`${path}/:id`}>
          <Episode number={number} />
        </Route>
      </Switch>
    </div>
  );
};
