import React from "react";
import { Link } from "react-router-dom";

export const Summary = (props) => {
  const { summary, number } = props;

  return (
    <div className="text-center">
      <div className="p-2 text-white">
        <p>{summary ? summary : "No Storyline"}</p>
        <Link to={`/season${number}/episodes`} className="btn btn-primary">
          Episodes
        </Link>
      </div>
    </div>
  );
};
