import React from "react";

export const CastDetails = (props) => {
  const {
    details: { age, cast, name, nationality },
    close,
  } = props;

  return (
    <div className="cast-card__active">
      <h4>More Info</h4>
      <ul>
        <li>Name: {name}</li>
        <li>Cast: {cast}</li>
        <li>Age: {age}</li>
        <li>Nationality: {nationality}</li>
      </ul>

      <a
        name="castButton"
        onClick={close}
        className="cast-card__btn"
        href="#d"
        role="button"
      >
        <i className="fa fa-times" aria-hidden="true"></i>
      </a>
    </div>
  );
};
