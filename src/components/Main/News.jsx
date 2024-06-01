import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { MdArrowOutward } from "react-icons/md";
import { url } from "../../Api";

const News = () => {
  const [stay, setStay] = useState([]);
  const data = Object.values(stay).map((item) => item);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url + "/index/news?limit=3");
        setStay(response.data.news);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <div className="news">
      <div className="container">
        <div className="news_block_all">
          <div className="bitcoin_img"></div>
          <div className="reliability_position">🔥 Надежность</div>
          <div className="license_position">Лицензия 💎</div>
          <h1>
            Наша <span className="mission">миссия</span> - <br /> сделать
            цифровые <br />
            <span className="blur-text">финансы </span>
            доступными
            <br /> и удобными
          </h1>
          <div className="dollar_img"></div>

          <h3 className="news_title">Новости</h3>
          <div className="grid-mob">
            {data.map((el) => (
              <div className="news_box">
                <div className="news_box_img">
                  <img src={el.photo} alt="" />
                </div>
                <div className="news_name_body">
                  <h4>{el.name}</h4>
                  <p>{el.body}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="news_btn btn-crypto-all">
            Все новости <MdArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
