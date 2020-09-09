import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CastDetails } from "./CastDetails";
import _ from "lodash";

export const EachCast = (props) => {
  const { casts } = props;
  const [show, setShow] = useState(0);

  const OpenDetails = (id) => setShow(id);
  const CloseDetails = () => setShow(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const item = casts.map((cast) => (
    <div key={cast.id} className="cast-card">
      <img src={cast.src} alt={cast.cast} className="cast-card__img" />
      <h6
        className={`cast-card__name ${
          show === cast.id ? "cast-card__details" : ""
        }`}
      >
        <span>{cast.cast}</span>
        <strong>{cast.name}</strong>
      </h6>

      <div
        onClick={() =>
          show === cast.id ? CloseDetails() : OpenDetails(cast.id)
        }
        className={`cast-card__icon ${show === cast.id ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {show === cast.id && (
        <CastDetails details={_.find(casts, { id: cast.id })} />
      )}
    </div>
  ));

  return <Slider {...settings}>{item}</Slider>;
};
