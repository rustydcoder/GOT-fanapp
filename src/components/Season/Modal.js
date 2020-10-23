import React from "react";
import { useHistory } from "react-router-dom";

const Modal = (props) => {
  let history = useHistory();
  let back = (e) => {
    history.goBack();
  };
  return (
    <div className="season-modal">
      <div
        className="season-modal_overlay"
        onClick={() => {
          props.close();
          back();
        }}
      ></div>
      <div className="season-modal_content">{props.children}</div>
      <button
        className="btn btn-primary season-card__btn"
        onClick={() => {
          props.close();
          back();
        }}
      >
        <i className="fa fa-times" aria-hidden="true"></i>
      </button>
    </div>
  );
};
export default Modal;
