import React from "react";
import "../styles/BuyandSell.css";
import number1 from "../assets/number1.svg";
import number2 from "../assets/number2.svg";
import number3 from "../assets/number3.svg";
import profilepics from "../assets/profilepics.png";
import piggyimage from "../assets/piggyimage.svg";
import newbitcoin from "../assets/newbitcoin.svg";
const BuyandSell = () => {

  return (
    <div className="buy-section">
      <div className=" container buy-content">
        <h2 className="buy-section2"> Buy and Sell Cryptocurrency in 3 simple steps</h2>
        <p className="buy-section3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          inventore, dicta modi laboriosam architecto facilis quia. Incidunt
          nisi sed distinctio nam ducimus odit, dignissimos, voluptatsdantore,
          dicta modi laboriosam architecto facilis quia. Incos, voluptatem
          voluptate dicta eum, quibusdam dm dntore, dicta modi laboriosam
          architecto voluptate dicta eum?
        </p>
      </div>
      <div className="container">
        <div className="buy-main d-flex  align-items-center  mt-5">
          <div className="d-flex  gap-4 create">
            <img className="img1 mb-5" src={number1} alt="" />
            <div className="create-content">
              <h2>Create a free Account</h2>
              <p>
                Sign up for you free TradExpress Wallet on web, iOS, or Andriod
                devices and follow our easy process to set up your profile.
              </p>
            </div>
          </div>
          <div className="container">
            <img className="create-img" src={profilepics} alt="" />
          </div>
        </div>

        <div className="buy-main d-flex align-items-center container buy-main2">
          <div className="d-flex gap-4">
            <img className="img1 mb-5" src={number2} alt="" />
            <div className="create-content">
              <h2>Deposit</h2>
              <p>
                Choose your preferred deposit option like bank transfer,
                credit/debit card or send digital asset directly to your wallet
                for easy funding/withdrawal.
              </p>
            </div>
          </div>
          <div className="container">
            <img className="create-img" src={piggyimage} alt="" />
          </div>
        </div>
        <div className="buy-main d-flex align-items-center">
          <div className="d-flex gap-4">
            <img className="img1 mb-5" src={number3} alt="" />
            <div className=" create-content">
              <h2>Buy/ Sell Crypto</h2>
              <p>
                Sign up for you free TradExpress Wallet on web, iOS, or Andriod
                devices and follow our easy process to set up your profile.
              </p>
            </div>
          </div>
          <div className="container">
            <img className="create-img" src={newbitcoin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyandSell;
