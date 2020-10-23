import React from "react";
import LogoSrc from "../images/logo-brand.png";

const Logo = () => (
  <nav className="navbar fixed-top navbar-dark justify-content-center">
    <a href="#index" className="navbar-brand">
      <img className="navbar-brand__logo" alt="Logo" src={LogoSrc} />
    </a>
  </nav>
);

export default Logo;
