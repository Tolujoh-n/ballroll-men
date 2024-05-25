import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header id="header" className="header fixed-top" data-scrollto-offset="0">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <Link
          to="/"
          className="logo d-flex align-items-center scrollto me-auto me-lg-0"
        >
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt=""> */}
          <h1>Goatgpt</h1>
        </Link>

        <Link className="btn-getstarted scrollto" to="/#about">
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Nav;
