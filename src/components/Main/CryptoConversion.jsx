import React, { useEffect, useState } from "react";
import party_img from "../../assets/img/logo22.svg";
import { url } from "../../Api";
import axios from "axios";
import { RiArrowDownSLine } from "react-icons/ri";
import Selects from "../../UI/Select/Select";

const CryptoConversion = () => {
  const [buy, setBuy] = useState(true);
  const [sel, setSel] = useState(false);
  const [chekbox, setChekbox] = useState(false);
  const [chekboxOne, setChekboxOne] = useState(false);
  const [article, setArticle] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [fiatPrise, setFiatPrise] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedPriceChange, setSelectedPriceChange] = useState("");
  const [selectedPriceOne, setSelectedPriceOne] = useState("");
  const [selectedPriceOneChange, setSelectedPriceOneChange] = useState("");
  const [fiat, setFiat] = useState([]);
  const handleBuyClick = () => {
    setBuy(true);
    setSel(false);
  };

  const handleSellClick = () => {
    setBuy(false);
    setSel(true);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchFiat();
  }, []);

  const fetchFiat = async () => {
    try {
      const response = await axios.get(url + "/currencies/fiat");
      setFiat(response.data.currencies);
      const firstCurrency = Object.values(response.data.currencies).find(
        (currency) => currency.currency === "KGS"
      );
      setFiatPrise(firstCurrency);
      setSelectedPriceOne(firstCurrency.rate);

      setSelectedPrice(firstCurrency.rate * firstCurrency.rate);
    } catch (error) {
      console.log("AxiosError:", error.message);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(url + `/currencies`);
      setArticle(response.data.currencies);
      const firstCurrency = Object.values(response.data.currencies).find(
        (currency) => currency.id === "1"
      );
      setSelectedItem(firstCurrency);
      setSelectedPrice(firstCurrency.rate);
    } catch (error) {
      console.log("AxiosError:", error.message);
    }
  };

  const course = selectedPriceOneChange / selectedPriceOne;

  return (
    <div className="container">
      <div className="crypto-conversion">
        <div className="conditions-conversion">
          <div>
            <h1>
              Лучший сервис <br /> по продаже <br /> и покупке криптовалют
            </h1>
            <p>
              Ваш путь к свободе финансов и инновационным возможностям
              начинается здесь и сейчас. Добро пожаловать в мир криптовалюты!
            </p>
          </div>
          <button>Подробнее</button>
        </div>
        <div className="conversion-calc-box">
          <div className="conversion-calc">
            <div>
              <div className="sel-buy-party d-f-center">
                <img src={party_img} alt="" />
                <span>Party:</span>
                <h2> Присоединяйтесь к премиум-аккаунту! 🎁</h2>
              </div>
              <div className="conversion-calc-really">
                <div className="conversion-buy-active">
                  <div className={buy ? "active" : ""} onClick={handleBuyClick}>
                    Купить
                  </div>
                  <div
                    className={sel ? "active" : "buy-active"}
                    onClick={handleSellClick}
                  >
                    Продать
                  </div>
                </div>
                <div className="give-it-away-block">
                  <div className="give-it-away-box">
                    <label htmlFor="">
                      Вы отдаете:{setSelectedPriceOneChange}
                    </label>
                    <div className="input_box d-f-sb">
                      <input
                        placeholder="0.00"
                        type="number"
                        value={selectedPriceOneChange}
                        onChange={(e) =>
                          setSelectedPriceOneChange(e.target.value)
                        }
                      />
                      <div
                        className="crypto-select"
                        onClick={() => setChekboxOne(!chekboxOne)}
                      >
                        {fiatPrise && (
                          <div className="selected-item">
                            <img src={fiatPrise.logo} alt="" />
                            <div className="calc-currency-text">
                              <b>{fiatPrise.currency}</b>
                              <span>{fiatPrise.name}</span>
                            </div>
                            <RiArrowDownSLine size={25} color={"#000"} />
                          </div>
                        )}
                        {chekboxOne && (
                          <Selects>
                            {fiat &&
                              Object.values(fiat)?.map((el) => (
                                <div
                                  className="bitkoint"
                                  onClick={() => {
                                    setFiatPrise(el);
                                    setSelectedPriceOne(el.rate);
                                    setChekboxOne(false);
                                  }}
                                >
                                  <img src={el.logo} alt="" />
                                  <div className="calc-currency-text ">
                                    <b>{el.currency}</b>
                                    <span>{el.name}</span>
                                  </div>
                                </div>
                              ))}
                          </Selects>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="give-it-away-box">
                    <label htmlFor="">
                      Вы получаете:{course / selectedPrice}
                    </label>
                    <div className="input_box d-f-sb">
                      <input
                        placeholder="0.00"
                        type="number"
                        value={course / selectedPrice}
                        onChange={(e) => setSelectedPriceChange(e.target.value)}
                      />
                      <div
                        className="crypto-select"
                        onClick={() => setChekbox(!chekbox)}
                      >
                        {selectedItem && (
                          <div className="selected-item">
                            <img src={selectedItem.logo} alt="" />
                            <div className="calc-currency-text">
                              <b>{selectedItem.currency}</b>
                              <span>{selectedItem.name}</span>
                            </div>
                            <RiArrowDownSLine size={25} color={"#000"} />
                          </div>
                        )}
                        {chekbox && (
                          <Selects>
                            {article &&
                              Object.values(article)?.map((el) => (
                                <div
                                  className="bitkoint"
                                  onClick={() => {
                                    setSelectedItem(el);
                                    setSelectedPrice(el.rate);
                                    setChekbox(false);
                                  }}
                                >
                                  <img src={el.logo} alt="" />
                                  <div className="calc-currency-text ">
                                    <b>{el.currency}</b>
                                    <span>{el.name}</span>
                                  </div>
                                </div>
                              ))}
                          </Selects>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="buy-btn">Купить сейчас</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoConversion;
