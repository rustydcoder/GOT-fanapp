import React from "react";
import { NavLink } from "react-router-dom";

const FooterNav = () => (
  <footer className="footer fixed-bottom">
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <NavLink
          className="nav-link"
          activeClassName="nav-link__active"
          to="/casts"
        >
          Cast
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          activeClassName="nav-link__active"
          to="/seasons"
        >
          Seasons
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="nav-link__active" to="/">
          Home
        </NavLink>
      </li>
    </ul>
  </footer>
);

export default FooterNav;
