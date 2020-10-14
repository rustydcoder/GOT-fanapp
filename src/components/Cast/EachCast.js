import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const EachCast = (props) => {
  const { casts } = props;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const item = casts.map((cast, i) => (
    <div key={i} className="cast-card">
      <img src={cast.src} alt={cast.cast} className="cast-card__img" />
      <h6 className="cast-card__name">
        <span>{cast.cast}</span>
        <strong>{cast.name}</strong>
      </h6>
    </div>
  ));

  return <Slider {...settings}>{item}</Slider>;
};
