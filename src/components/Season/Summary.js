import React from "react";

export const Summary = (props) => {
  const { summary } = props;
  return (
    <div className="text-center">
      <div className="p-2">
        <p>{summary ? summary : ""}</p>
        <button className="btn btn-primary">Episodes</button>
      </div>
    </div>
  );
};
