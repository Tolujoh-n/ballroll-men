import React, { useState, useEffect } from "react";
import AOS from "aos";
import { FaClock, FaCopy } from "react-icons/fa";
import QRCode from "qrcode.react";
import { Dialog, IconButton } from "@mui/material";
import QrCodeIcon from "@mui/icons-material/QrCode";
import Nav from "./Nav";
import Table from "./Table";
import logo from "../assets/img/sol.jpg";

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
  const [timeLeft, setTimeLeft] = useState(172800);
  const [copied, setCopied] = useState(false);
  const [walletAddress] = useState(
    "71ocfzveVjJYoSY1fYKTH3PUSveiGURcJELknmUMpwgP"
  );
  const [appNumber] = useState(generateAppNumber());
  const [open, setOpen] = useState(false);
  const solanaAddress = "71ocfzveVjJYoSY1fYKTH3PUSveiGURcJELknmUMpwgP";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              <div
                className="icon-box"
                style={{ width: "100%", color: "grey" }}
              >
                <h5>
                  <b>Example:</b>
                </h5>

                <p
                  style={{
                    marginBottom: "8px",
                  }}
                  className="description"
                >
                  Send 1+ SOL <img src={logo} alt="Logo" id="paralogo" /> get 2+
                  SOL <img src={logo} alt="Logo" id="paralogo" /> back
                </p>
                <p
                  style={{
                    marginBottom: "8px",
                  }}
                  className="description"
                >
                  Send 100+ SOL <img src={logo} alt="Logo" id="paralogo" /> get
                  200+ SOL <img src={logo} alt="Logo" id="paralogo" /> back
                </p>
                <p
                  style={{
                    marginBottom: "8px",
                  }}
                  className="description"
                >
                  Send 1,000+ SOL <img src={logo} alt="Logo" id="paralogo" />{" "}
                  get 2,100+ SOL <img src={logo} alt="Logo" id="paralogo" />{" "}
                  back <span id="tagspa">+10% Bonus</span>
                </p>
                <p
                  style={{
                    marginBottom: "8px",
                  }}
                  className="description"
                >
                  Send 2,000+ SOL <img src={logo} alt="Logo" id="paralogo" />{" "}
                  get 4,500+ SOL <img src={logo} alt="Logo" id="paralogo" />{" "}
                  back <span id="tagspa">+25% Bonus</span>
                </p>
                <p
                  style={{
                    marginBottom: "8px",
                  }}
                  className="description"
                >
                  Send 5,000+ SOL <img src={logo} alt="Logo" id="paralogo" />{" "}
                  get 12,500+ SOL <img src={logo} alt="Logo" id="paralogo" />{" "}
                  back <span id="tagspa">+50% Bonus</span>
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-6 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div
                className="icon-box"
                style={{ width: "100%", background: "#ecfff9" }}
              >
                <div className="icon timer" style={{ fontSize: "25px" }}>
                  <FaClock />
                  <b>
                    <span style={{ color: "#09bdc3" }}>
                      {formatTime(timeLeft)}
                    </span>
                  </b>
                </div>

                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    {/* First word with icon */}
                    <div>
                      <span>
                        <p className="description" style={{ margin: 0 }}>
                          <b>Send SOL to the Contribution Address:</b>
                        </p>
                      </span>
                    </div>
                    {/* Second word */}
                    <div>
                      <span>
                        <IconButton
                          onClick={handleClickOpen}
                          style={{ marginLeft: "10px" }}
                        >
                          <QrCodeIcon fontSize="large" />
                        </IconButton>
                      </span>
                    </div>
                  </div>

                  <Dialog onClose={handleClose} open={open}>
                    <div style={{ position: "relative", padding: "20px" }}>
                      <QRCode value={solanaAddress} size={256} renderAs="svg" />
                      <img
                        src={logo}
                        alt="Solana Logo"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "50px",
                          height: "50px",
                        }}
                      />
                    </div>
                  </Dialog>
                </div>

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
                <p className="description">
                  <b>Your application number:</b>
                  <br />
                </p>
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
              <div className="icon-box" style={{ background: "#fff" }}>
                <p className="description">
                  To participate you just need to send from{" "}
                  <span style={{ color: "#0cf689" }}>0.1 SOL</span> to{" "}
                  <span style={{ color: "#0cf689" }}>100,000 SOL </span>
                  to the contribution address, and we will immediately send you
                  back <span style={{ color: "#0cf689" }}>0.2 SOL</span> to{" "}
                  <span style={{ color: "#0cf689" }}>200,000 SOL </span> (x2
                  back) to the address you sent it from. You can only
                  participate once!
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

          <Table />
        </div>
      </section>
    </>
  );
};

export default Sol;
