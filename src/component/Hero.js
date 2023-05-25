import React from "react";
import "../styles/Hero.css";
import image from "../assets/Ellipse 1 (1).svg";
import image2 from "../assets/Ellipse 1.svg";
import logo2 from "../assets/TradExpress.png";
import apple from "../assets/Group 68@2x.png";
import play from "../assets/Group 69.png";

const Hero = () => {
  return (
    <div className="hero">
      <img className="img2" src={image} alt="" />
      <img className="img3" src={image2} alt="" />
      <div className="nav-section">
        <header className="container nav-content">
          <nav className="mt-4">
            <img src={logo2} alt="" />
          </nav>
          <nav className="d-flex flex-row-reverse justify-content-between nav-list1">
            <ul className="mt-4 nav-list">
              <li className="list-unstyled text-white w-25 list1">
                Instant Buy/Sell
              </li>
              <li className="list-unstyled text-white list2">Learn</li>
              <button className="btn border w-75">Login</button>
              <button className="btn2 border w-100">Get Started</button>
            </ul>
          </nav>
        </header>
      </div>
      <section className="container content">
        <h1 className="content-section ">
          Buy, sell and manage your <br /> Crypto on TradExpress.
        </h1>
        <p className="text-white mt-2">
          Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC <br /> & XRP with
          NGN.
        </p>
        <button className="btn3 mt-2">Get Started</button>
        <div className="mt-4 content-download">
          <img src={apple} alt="" />
          <img src={play} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
