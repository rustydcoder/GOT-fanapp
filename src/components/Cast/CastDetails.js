import React from "react";
import { Transition, animated } from "react-spring/renderprops";

export const CastDetails = ({ details }) => {
  return (
    <Transition
      items={details}
      from={{ opacity: 0, transform: "translate(0, 100%)" }}
      enter={{ opacity: 1, transform: "translate(0, 0%)" }}
      leave={{ opacity: 0, transform: "translate(0, -50%)" }}
    >
      {(item) => (style) => (
        <animated.div style={style} className="cast-card__active">
          <ul>
            <li>Age: {item.age}</li>
            <li>Nationality: {item.nationality}</li>
          </ul>
        </animated.div>
      )}
    </Transition>
  );
};
