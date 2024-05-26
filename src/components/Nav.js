import React from "react";
import { Link } from "react-router-dom";
import sollogo from "../assets/img/solana-logo.svg";
// import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
  return (
    <header id="header" className="header" data-scrollto-offset="0">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <Link
          to="/"
          className="logo d-flex align-items-center scrollto me-auto me-lg-0"
        >
          <img className="img-fluid" src={sollogo} alt="Solana Logo" />
        </Link>
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <style>
        {`
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .spinner-border {
            animation: rotate 2s linear infinite;
          }
        `}
      </style>
    </header>
  );
};

export default Nav;
