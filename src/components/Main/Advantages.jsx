import React from "react";
import Slider from "react-slick";
import whitebit from "../../assets/img/while-bit.png";
import pay from "../../assets/img/pay24.png";
import binance from "../../assets/img/binence.png";
import bybit from "../../assets/img/byb.svg";
import kraken from "../../assets/img/kraken.svg";
import bitfinex from "../../assets/img/bitfinex.png";
import sumsub from "../../assets/img/samsub.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Advantages = () => {
  const settingsLeft = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="advantages">
      <div className="shadow-one" />
      <div className="slider-auto-play">
        <Slider {...settingsLeft}>
          <div>
            <img src={pay} alt="" />
          </div>
          <div>
            <img src={binance} alt="" />
          </div>
          <div>
            <img src={bybit} alt="" />
          </div>
          <div>
            <img src={kraken} alt="" />
          </div>
          <div>
            <img src={bitfinex} alt="" />
          </div>
          <div>
            <img src={whitebit} alt="" />
          </div>
          <div>
            <img src={sumsub} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Advantages;
