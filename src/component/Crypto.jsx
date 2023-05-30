import React, { useState } from "react";
import { useEffect } from "react";
import '../styles/Crypto.css'
import green from '../assets/up.png'
import red from '../assets/down.png'

const Crypto = () => {
  const [data, setData] = useState([]);
  let apiUrl = "https://api.coinlore.net/api/tickers/?start=0&limit=5";
  const fetcher = async () => {
    try {
      let fetchedData = await fetch(apiUrl);
      let response = await fetchedData.json();
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);
  return (
    <div className="d-flex crypto-2  ">
    

      {data.map((datum) => {
        const {id, symbol, price_usd, percent_change_24h } = datum;
        return (
          <div key={id} className="d-flex gap-5 container crypto-content">
            <div>
                <p>{symbol}/NGN</p>
                <p>{price_usd}NGN</p>

            </div>
            <p>
              {percent_change_24h}%
              <span className="arrows">
                {percent_change_24h <=0 ? (
                  <img src={red} alt="" />
                ) : (
                  <img src={green} alt="" />
                )}
              </span>
            </p>
            
            
          </div>
          
        );
      })}
    </div>
  );
};

export default Crypto;
