import React, { useState } from "react";
import { useEffect } from "react";

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
    <div className="d-flex justify-content-between container">
      {data.map((datum) => {
        const {id, symbol, price_usd, percent_change_24h } = datum;
        return (
          <div key={id} className="d-flex gap-5">
            <div>
                <p>{symbol}/NGN</p>
                <p>{price_usd} NGN</p>
            </div>
            <p>{percent_change_24h}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Crypto;
