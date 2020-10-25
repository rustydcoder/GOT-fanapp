import React from "react";
import LogoSrc from "../images/logo-brand.png";
import {Link} from "react-router-dom";

const Logo = () => (
  <nav className="navbar fixed-top navbar-dark justify-content-center">
    <Link to="/" className="navbar-brand">
      <img className="navbar-brand__logo" alt="Logo" src={LogoSrc} />
    </Link>
  </nav>
);

export default Logo;
