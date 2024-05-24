import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../assets/img/slider1.svg";
import slider2 from "../../assets/img/slider2.svg";
import slider3 from "../../assets/img/slider3.svg";

const SliderCrypto = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      id: 1,
      img: slider1,
    },
    {
      id: 2,
      img: slider2,
    },
    {
      id: 3,
      img: slider3,
    },
    {
      id: 4,
      img: slider1,
    },
    {
      id: 5,
      img: slider2,
    },
    {
      id: 6,
      img: slider3,
    },
  ];
  return (
    <div className="slider-crypto">
      <div className="container">
        <Slider className="slider-block" {...settings}>
          {data.map((el, id) => (
            <div className="slider-index" key={id}>
              <img src={el.img} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderCrypto;
