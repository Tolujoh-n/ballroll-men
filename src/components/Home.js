import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import heroimg from "../assets/img/solana founder.webp";
// import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <>
      <Nav />
      <section
        id="hero-animated"
        className="hero-animated d-flex align-items-center"
      >
        <div
          className="container d-flex flex-column justify-content-center align-items-center text-center position-relative"
          data-aos="zoom-out"
        >
          <img
            src={heroimg}
            className="img-fluid rounded-circle mb-3"
            alt="Hero"
          />
          <h2>
            Solana Foundation's <br /> 500,000 SOL Giveaway
          </h2>
          <p>
            The past couple of years our journey has been filled with
            challenges, but with every challenge, we've emerged stronger.
            Recently, we celebrated a major Solana network upgrade to avoid any
            outages in the future & saving us hundreds of millions in legal
            fees. To thank you all for being with us through all these ups &
            downs, we've decided to run a 500,000 SOL giveaway to all of our
            holders.
          </p>
          <div className="d-flex">
            <Link to="/sol" className="btn btn-primary btn-lg">
              Join Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
