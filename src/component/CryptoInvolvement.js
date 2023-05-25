import React from "react";
import "../styles/CryptoInvolvement.css";

const CryptoInvolvement = () => {
  return (
    <div className="main">
      <div className="container rate">
        <div className="cypto-rate">
          <h3 className="">
            BTC/NGN
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-3.21%{" "}
            <span className="vl"></span>
            <br /> 20,560,101.59 NGN
          </h3>
        </div>
        <div className="cypto-rate">
          <h3>
            USDT/NGN
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+10.20%{" "}
            <span className="vl2"></span>
            <br /> 453.44NGN
          </h3>
        </div>
        <div className="cypto-rate">
          <h3>
            ETN/NGN
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            -253% <span className="vl3"></span>
            <br /> 818,490.32NGN
          </h3>
        </div>
        <div className="cypto-rate">
          <h3>
            LTC/NGN
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;81,0002.32%{" "}
            <span className="vl4"></span>
            <br /> 818,490.32 NGN
          </h3>
        </div>
        <div className="cypto-rate">
          <h3>
            XRP/N <span className="vl5"></span>
            <br /> 226.56
          </h3>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CryptoInvolvement;
