import React from "react";

const Modal = (props) => (
  <div className="season-modal">
    <div className="season-modal_overlay" onClick={() => props.close()}></div>
    <div className="season-modal_content">{props.children}</div>
    <button
      className="btn btn-primary season-card__btn"
      onClick={() => props.close()}
    >
      <i className="fa fa-times" aria-hidden="true"></i>
    </button>
  </div>
);

export default Modal;
