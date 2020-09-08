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
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const item = casts.map((cast) => (
    <div key={cast.id} className="cast-card">
      <img src={cast.src} alt={cast.cast} className="cast-card__img" />
      <h6 className="cast-card__name">
        <span>{cast.cast}</span>
        <strong>{cast.name}</strong>
      </h6>
      <a
        name="castButton"
        onClick={() => OpenDetails(cast.id)}
        className="cast-card__btn"
        href="#d"
        role="button"
      >
        <i className="fa fa-bars" aria-hidden="true"></i>
      </a>
      {show === cast.id ? (
        <CastDetails
          close={CloseDetails}
          details={_.find(casts, { id: cast.id })}
        />
      ) : null}
    </div>
  ));

  return <Slider {...settings}>{item}</Slider>;
};
