import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import heroimg from "../assets/img/hero-carousel/hero-carousel-3.svg";

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
          <img src={heroimg} className="img-fluid animated" alt="Hero" />
          <h2>
            Welcome to <span>Goatgpt</span>
          </h2>
          <p>
            Et voluptate esse accusantium accusamus natus reiciendis quidem
            voluptates similique aut.
          </p>
          <div className="d-flex">
            <Link to="/sol" className="btn-get-started scrollto">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
