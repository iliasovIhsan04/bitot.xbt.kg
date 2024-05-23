import React from "react";
import "../../assets/css/app.css";
import "../../assets/css/index.css";
import CryptoConversion from "./CryptoConversion";
import SliderCrypto from "./SliderCrypto";
import PopularCryptoCurrencies from "./PopularCryptoCurrencies";

const Main = () => {
  return (
    <div className="container">
      <div className="main">
        <CryptoConversion />
        <SliderCrypto />
        <PopularCryptoCurrencies />
      </div>
    </div>
  );
};

export default Main;
