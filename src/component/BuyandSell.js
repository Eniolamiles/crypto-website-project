import React from "react";
import "../styles/BuyandSell.css";
import number1 from "../assets/number1.svg";
import number2 from "../assets/number2.svg";
import number3 from "../assets/number3.svg";
import profilepics from "../assets/profilepics.png";
import piggyimage from "../assets/piggyimage.svg";
import newbitcoin from "../assets/piggyimage.svg";
const BuyandSell = () => {
  return (
    <div className="buy-section">
      <div className=" container buy-content">
        <h2> Buy and Sell Cryptocurrency in 3 simple steps</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          inventore, dicta modi laboriosam architecto facilis quia. Incidunt
          nisi sed distinctio nam ducimus odit, dignissimos, voluptatem
          voluptate dicta eum, quibusdam dolorem?
        </p>
      </div>
      <div className="container">


        <div className="buy-main d-flex align-items-center">
          <div className="d-flex">
              <img className="img1 mb-5" src={number1} alt="" />
            <div className=" ">
            <h2>Create a free Account</h2>
            <p>
              Sign up for you free TradExpress Wallet on web, iOS, or Andriod
              devices and follow our easy process to set up your profile.
            </p>
            </div>
          </div>
          <div>
            <img src={profilepics} alt="" />
          </div>
        </div>


        <div>
          <img src={number2} alt="" />

          <h2>Deposit</h2>
          <p>
            Choose your preferred deposit option like bank transfer,
            credit/debit card or send digital asset directly to your wallet for
            easy funding/withdrawal.
          </p>
        </div>
        <div>
          <img src={piggyimage} alt="" />
        </div>
        <div>
          <img src={number3} alt="" />
          <h2>Buy/ Sell Crypto</h2>
          <p>
            Sign up for you free TradExpress Wallet on web, iOS, or Andriod
            devices and follow our easy process to set up your profile.
          </p>
        </div>
        <div>
          <img src={newbitcoin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BuyandSell;
