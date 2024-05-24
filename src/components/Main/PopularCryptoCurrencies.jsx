import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../../Api";
import DifferenceComponent from "./DifferenceComponent";
import Chart from "react-apexcharts";
import { MdArrowOutward } from "react-icons/md";

const PopularCryptoCurrencies = () => {
  const [popular, setPopular] = useState([]);

  const data = Object.values(popular).map((data) => data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url + "/index");
        setPopular(response.data.currencies);
      } catch (error) {
        console.log("Ошибка:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="popular-crypto-currencies">
      <div className="container">
        <h2>Популярные криптовалюты</h2>
        <div className="popular-crypto-header">
          <p>Торговая пара</p>
          <p>Цена</p>
          <p>Объем 24ч (USDT)</p>
          <p>Рынок</p>
          <p className="action">Действие</p>
        </div>
        {data.map((el, id) => (
          <div className="popular-crypto-header" key={id}>
            <div className="logo-block">
              <img src={el.logo} />
              <p className="title">{el.name}</p>
            </div>
            <p className="title-rate">{el.rate}</p>
            <p className="title-difference">
              <DifferenceComponent value={el.difference} />
            </p>
            <div className="chart-block">
              <Chart
                options={{
                  chart: {
                    type: "area",
                    toolbar: {
                      show: false,
                    },
                    zoom: {
                      enabled: false,
                    },
                  },
                  stroke: {
                    curve: "smooth",
                    width: 3,
                    colors: el.difference.includes("-") ? ["red"] : ["#07A574"],
                    opacity: 0.3,
                  },
                  grid: {
                    xaxis: { lines: { show: false } },
                    yaxis: {
                      lines: {
                        show: false,
                      },
                    },
                  },
                  dataLabels: { enabled: false },
                  legend: { show: false },
                  xaxis: { labels: { show: false } },
                  yaxis: { labels: { show: false } },
                  line: { show: true },
                }}
                series={[
                  {
                    name: "Series 1",
                    data: el.rates.map((rate) => rate.price),
                  },
                ]}
                width="205px"
                height="100px"
                type="area"
              />
            </div>
            <button className="btn-crypto-all trade-btn">Торговля</button>
          </div>
        ))}
        <button className="btn-crypto-all start-trading-btn">
          Начать торговлю <MdArrowOutward size={20} />
        </button>
      </div>
    </div>
  );
};

export default PopularCryptoCurrencies;
