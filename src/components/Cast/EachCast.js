import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const EachCast = (props) => {
  const { casts } = props;

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    focusOnSelect: true,
  };

  const item = casts.map((cast) => (
    <div key={cast.id} className="cast-card">
      <img src={cast.src} alt={cast.cast} className="cast-card__img" />
      <h6 className="cast-card__name">
        <span>{cast.cast}</span>
        <strong>{cast.name}</strong>
      </h6>
      <a name="castButton" className="cast-card__btn" href="#d" role="button">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </a>
    </div>
  ));

  return <Slider {...settings}>{item}</Slider>;
};
