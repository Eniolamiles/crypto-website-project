import React from "react";
import "../styles/Hero.css";
import image from "../assets/Ellipse 1 (1).svg";
import image2 from "../assets/Ellipse 1.svg";
import apple from "../assets/Group 68@2x.png";
import play from "../assets/Group 69.png";

const Hero = () => {
  return (
    <div className="hero">
      <img className="img2" src={image} alt="" />
      <img className="img3" src={image2} alt="" />
      
      <section className="container content">
        <h1 className="content-section ">
          Buy, sell and manage your <br /> Crypto on TradExpress.
        </h1>
        <p className="text-white mt-2">
          Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC <br /> & XRP
          with NGN.
        </p>
        <button className="btn3 mt-2">Get Started</button>
        <div className="mt-4 content-download">
          <img src={apple} alt="" />
          <img src={play} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
