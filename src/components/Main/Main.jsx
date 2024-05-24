import React from "react";
import "../../assets/css/app.css";
import "../../assets/css/index.css";
import CryptoConversion from "./CryptoConversion";
import SliderCrypto from "./SliderCrypto";
import PopularCryptoCurrencies from "./PopularCryptoCurrencies";
import OurTeam from "./OurTeam";
import News from "./News";
import Faq from "./Faq";
import Footer from "../Footer";

const Main = () => {
  return (
    <div className="main">
      <CryptoConversion />
      <SliderCrypto />
      <PopularCryptoCurrencies />
      <OurTeam />
      <News />
      <Faq />
      <Footer />
    </div>
  );
};

export default Main;
