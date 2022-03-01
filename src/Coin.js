import React from "react";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin-img">
          <img src={image} alt="crypto" />
        </div>
        <h1>{name}</h1>
        <span className="coin-symbol"> {symbol}</span>
        <div className="coin-data">
          <span className="coin-price"> ${price}</span>
          <span className="coin-volume">${volume.toLocaleString()}</span>
          {priceChange < 0 ? (
            <span className="coin-percent red">{priceChange.toFixed(2)}%</span>
          ) : (
            <span className="coin-percent green">
              {priceChange.toFixed(2)}%
            </span>
          )}
          <span className="coin-marketcap">
            Mkt Cap: ${marketcap.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Coin;
