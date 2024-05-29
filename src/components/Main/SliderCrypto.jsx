import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../assets/img/slider1.svg";
import slider2 from "../../assets/img/slider2.svg";
import slider3 from "../../assets/img/slider3.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

const SliderCrypto = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   arrows: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplaySpeed: 3000,
  //   pauseOnHover: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

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
    <div style={{ width: "100%" }}>
      <div className="container">
        <Swiper
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={20}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation, Pagination, Keyboard]}
          style={{ width: "100%", marginTop: "100px" }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            904: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1224: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "100%" }}>
              <img className="mySwiperImg" height={160} src={item.img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderCrypto;
