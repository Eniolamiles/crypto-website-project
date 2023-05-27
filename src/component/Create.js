import React from "react";
import "../styles/Create.css";
import apple from '../assets/Group 119.png'
import pay from '../assets/Group 120.png'


const Create = () => {
  return (
    <div className="hero2">
      <div className="hero2-content p-4">
        <p className=" mt-4  content-p">Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
        <h2>Create your account for free and start trading today!</h2>
      </div>
      <div className="hero-btn text-center m-3">
        <button className="btn6 ">Get Started</button>
      </div>
      <div className="con-img mt-3 ">
        <img src={apple} alt="" />
        <img src={pay} alt="" />
      </div>
    </div>
  );
};

export default Create;
