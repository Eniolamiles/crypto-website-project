import React from "react";
import "../styles/CryptoInvolvement.css";
import Payment from "../assets/mobilepayment.png";
import Financial from "../assets/financial.png";
import Investment from "../assets/investment.png";

const CryptoInvolvement = () => {
  return (
    <div className="main">
      <div className="crypto-content ">
        <h2 className="text-center ">
          {/* <hr className="horizontal" /> */}
          Why do people get involved in Cryptocurrencies?
        </h2>
      </div>
      {/* <div className="vl"></div> */}
      <div className="btn5 ">
        <button className="mt-4 less ">See Less</button>
      </div>
      <div className=" container crypto-section">
        <div className="sec-box border">
          <img src={Payment} alt="" />
          <h5>Easy Mode of Payment</h5>
          <p>
            People can now easily send and receive money <br /> from anywhere in
            the to purchase goods and <br /> pay for services.
          </p>
        </div>
        <div className="sec-box border">
          <img src={Financial} alt="" />
          <h5>Financial Freedom</h5>
          <p>
            Just like the internet no single entity controls the <br /> Crypto
            network which provides user transparency and <br /> privacy, which
            puts you in absolute control of your money.
          </p>
        </div>
        <div className="sec-box border">
          <img src={Investment} alt="" />
          <h5>Investment</h5>
          <p>
            The constant demand as made Cryptocurrencies a Digital <br /> Gold
            used for alternative store of wealth on the long term <br />{" "}
            investment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CryptoInvolvement;
