import React from "react";
import '../styles/Review.css'
import rev from "../assets/Union.png";
import quote from "../assets/Group 208.png";
import ireti from '../assets/Group 207.png'
import bayo from '../assets/Group 207 (1).png'
import olagoke from '../assets/Group 207 (2).png'

const Review = () => {
  return (
    <div className="review">
      <div className="container review-section">
        <h3>Customer's Review</h3>
        <div className="review-content container">
          <div className="qq">
            <img src={rev} alt="" />
            <img className="quote" src={quote} alt="" />
            <p className="rr text-center" >
              Trading on TradExpress mobile & web platforms has been a smooth
              experience for me quite easy to navigate.
            </p>
            <img className="pic" src={ireti} alt="" />
          </div>

          <div className="qq">
            <img src={rev} alt="" />
            <img className="quote2" src={quote} alt="" />
            <p className="ss text-center">
              Trading on TradExpress mobile & web platforms has been a smooth
              experience for me quite easy to navigate.
            </p>
            <img className="pic" src={bayo} alt="" />
          </div>
          <div className="qq">
            <img src={rev} alt="" />
            <img className="quote3" src={quote} alt="" />
            <p className="yy text-center">
              Trading on TradExpress mobile & web platforms has been a smooth
              experience for me quite easy to navigate.
            </p>
            <img className="pic" src={olagoke} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
