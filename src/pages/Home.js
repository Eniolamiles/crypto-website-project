import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import CryptoInvolvement from "../component/CryptoInvolvement";
import BuyandSell from "../component/BuyandSell";
import Crypto from "../component/Crypto";
import Create from "../component/Create";
import Review from "../component/Review";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <Crypto></Crypto>
        <CryptoInvolvement />
        <BuyandSell />
        <Create />
        <Review />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
