import React, { useState, useEffect } from "react";
import AOS from "aos";
import { FaClock, FaCopy } from "react-icons/fa";
import Nav from "./Nav";
import Table from "./Table";

AOS.init();

const generateAppNumber = () => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const template = "xxxxxxxx-xxxxxxxx-xxxxxxxx-xxxxxxxx";
  return template.replace(
    /x/g,
    () => characters[Math.floor(Math.random() * characters.length)]
  );
};

const Sol = () => {
  const [timeLeft, setTimeLeft] = useState(3600);
  const [copied, setCopied] = useState(false);
  const [walletAddress] = useState(
    "71ocfzveVjJYoSY1fYKTH3PUSveiGURcJELknmUMpwgP"
  );
  const [appNumber] = useState(generateAppNumber());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const paytable = [
    {
      id: 1,
      hash: "v9dXpWZqGaZhVvFG4p5RUC...",
      participantwallet: "UEDwcdcBBzEEer7V2QqKIdytDo...",
      valuesol: "4605.06 SOL",
      receivesol: "5810.41 SOL",
      Status: "Completed",
    },
    {
      id: 2,
      hash: "v9dXpWZqGaZhVvFG4p5RUC...",
      participantwallet: "UEDwcdcBBzEEer7V2QqKIdytDo...",
      valuesol: "3605.06 SOL",
      receivesol: "5810.41 SOL",
      Status: "Completed",
    },
    {
      id: 3,
      hash: "v9dXpWZqGaZhVvFG4p5RUC...",
      participantwallet: "UEDwcdcBBzEEer7V2QqKIdytDo...",
      valuesol: "4605.06 SOL",
      receivesol: "5810.41 SOL",
      Status: "Completed",
    },
    {
      id: 4,
      hash: "v9dXpWZqGaZhVvFG4p5RUC...",
      participantwallet: "UEDwcdcBBzEEer7V2QqKIdytDo...",
      valuesol: "4605.06 SOL",
      receivesol: "5810.41 SOL",
      Status: "Completed",
    },
    {
      id: 5,
      hash: "v9dXpWZqGaZhVvFG4p5RUC...",
      participantwallet: "UEDwcdcBBzEEer7V2QqKIdytDo...",
      valuesol: "4605.06 SOL",
      receivesol: "5810.41 SOL",
      Status: "Completed",
    },
  ];

  return (
    <>
      <Nav />
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row icon-boxes">
            <div
              className="col-md-6 col-lg-6 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box" style={{ width: "100%" }}>
                <h5>Example:</h5>

                <p className="description">Send 100+ SOL get 200+ SOL back</p>
                <p className="description">Send 100+ SOL get 200+ SOL back</p>
                <p className="description">Send 100+ SOL get 200+ SOL back</p>
                <p className="description">
                  Send 1,000+ SOL get 2,100+ SOL back +10% Bonus
                </p>
                <p className="description">
                  Send 1,000+ SOL get 2,100+ SOL back +10% Bonus
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-6 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box" style={{ width: "100%" }}>
                <div className="icon timer" style={{ fontSize: "25px" }}>
                  <FaClock />
                  <b>
                    <span>{formatTime(timeLeft)}</span>
                  </b>
                </div>

                <p className="description">
                  Send SOL to the Contribution Address:
                </p>

                <div className="wallet-address">
                  <div className="input-wrapper">
                    <input type="text" value={walletAddress} readOnly />
                    <div className="copy-container" onClick={handleCopy}>
                      <span className="copy-text">
                        {copied ? "Copied" : "Copy"}
                      </span>
                      <FaCopy className="copy-icon" />
                    </div>
                  </div>
                </div>
                <p className="description">Your application number:</p>
                <div className="application-number">
                  <input type="text" value={appNumber} readOnly />
                </div>
              </div>
            </div>
          </div>
          <div className="row icon-boxes">
            <div
              className="col-md-12 col-lg-12 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <p className="description">
                  To participate you just need to send from 1 SOL to 100,000 SOL
                  to the contribution address, and we will immediately send you
                  back 2 SOL to 200,000 SOL (x2 back) to the address you sent it
                  from. You can only participate once!
                </p>
              </div>
            </div>
          </div>

          <div className="row icon-boxes">
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-wallet-fill"></i>
                </div>

                <p className="description">
                  To participate, you can do the transaction using any wallet or
                  exchange!
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-send-arrow-down"></i>
                </div>

                <p className="description">
                  Send the desired number of coins to the special address below.
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-wallet2"></i>
                </div>

                <p className="description">
                  Once we receive your transaction, the doubled amount will be
                  sent back to you immediately.
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-rocket-takeoff"></i>
                </div>

                <p className="description">
                  You can only take part in our giveaway once. Hurry up!
                </p>
              </div>
            </div>
          </div>
          <br />

          <div className="col-12  icon-boxes">
            <Table />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sol;