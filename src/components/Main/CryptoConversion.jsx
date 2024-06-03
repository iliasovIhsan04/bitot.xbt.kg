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
  const [fiat, setFiat] = useState([]);
  const [fiatGivenlar, setFiatGivenlar] = useState(null);
  const [articleGivenlar, setArticleGivenlar] = useState(null);
  const [selectedArticleRate, setSelectedArticleRate] = useState("");
  const [selectedFiatRate, setSelectedFiatRate] = useState("");
  const [sellAllBay, setSellAllBay] = useState(false);
  const [fiatRate, setFiatRate] = useState("");
  const [fiatChange, setFiatChange] = useState("");
  const [articleChange, setArticleChange] = useState("");
  const [selectedArticleChange, setSelectedArticleChange] = useState("");
  const [selectedFiatChange, setSelectedFiatChange] = useState("");
  const handleBuyClick = () => {
    setBuy(true);
    setSel(false);
    setSellAllBay(false);
  };

  const handleSellClick = () => {
    setBuy(false);
    setSel(true);
    setSellAllBay(true);
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
      setFiatGivenlar(firstCurrency);
      setSelectedFiatRate(firstCurrency.rate);
    } catch (error) {
      console.log("AxiosError:", error.message);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(url + `/currencies`);
      setArticle(response.data.currencies);
      const firstCurrency = Object.values(response.data.currencies).find(
        (currency) => currency.currency === "USDT"
      );
      setArticleGivenlar(firstCurrency);
      setSelectedArticleRate(firstCurrency.rate);
    } catch (error) {
      console.log("AxiosError:", error.message);
    }
  };

  const course = selectedFiatChange / selectedFiatRate;
  const priceFiat = articleChange * fiatRate;
  console.log(priceFiat);
  return (
    <div className="container">
      <div className="crypto-conversion">
        <div className="conditions-conversion">
          <div>
            <h1>
              Лучший сервис <br />
              <span className="for-sale-text">
                по продаже <div className="bitokkg-position">🔥 Bitok.kg</div>
              </span>
              <br /> и покупке криптовалют
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
                {sellAllBay === false ? (
                  <div className="give-it-away-block">
                    <div className="give-it-away-box">
                      <label htmlFor="">Вы отдаете:{selectedFiatChange}</label>
                      <div className="input_box d-f-sb">
                        <input
                          placeholder="0.00"
                          type="number"
                          value={selectedFiatChange}
                          onChange={(e) =>
                            setSelectedFiatChange(e.target.value)
                          }
                        />
                        <div
                          className="crypto-select"
                          onClick={() => setChekboxOne(!chekboxOne)}
                        >
                          {fiatGivenlar && (
                            <div className="selected-item">
                              <img src={fiatGivenlar.logo} alt="" />
                              <div className="calc-currency-text">
                                <b>{fiatGivenlar.currency}</b>
                                <span>{fiatGivenlar.name}</span>
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
                                      setFiatGivenlar(el);
                                      setSelectedFiatRate(el.rate);
                                      setChekboxOne(false);
                                    }}
                                  >
                                    <img src={el.logo} alt="" />
                                    <div className="calc-currency-text">
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
                      <label className="getting-block" htmlFor="">
                        Вы получаете:
                        <span className="crypto_course">
                          {course / selectedArticleRate}
                        </span>
                      </label>
                      <div className="input_box d-f-sb">
                        <input
                          placeholder="0.00"
                          type="number"
                          value={course / selectedArticleRate}
                          onChange={(e) =>
                            setSelectedArticleChange(e.target.value)
                          }
                        />
                        <div
                          className="crypto-select"
                          onClick={() => setChekbox(!chekbox)}
                        >
                          {articleGivenlar && (
                            <div className="selected-item">
                              <img src={articleGivenlar.logo} alt="" />
                              <div className="calc-currency-text">
                                <b>{articleGivenlar.currency}</b>
                                <span>{articleGivenlar.name}</span>
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
                                      setArticleGivenlar(el);
                                      setSelectedArticleRate(el.rate);
                                      setChekbox(false);
                                    }}
                                  >
                                    <img src={el.logo} alt="" />
                                    <div className="calc-currency-text">
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
                ) : (
                  <div className="give-it-away-block">
                    <div className="give-it-away-box">
                      <label htmlFor="">Вы отдаете:{articleChange}</label>
                      <div className="input_box d-f-sb">
                        <input
                          placeholder="0.00"
                          type="number"
                          value={articleChange}
                          onChange={(e) => setArticleChange(e.target.value)}
                        />
                        <div
                          className="crypto-select"
                          onClick={() => setChekbox(!chekbox)}
                        >
                          {articleGivenlar && (
                            <div className="selected-item">
                              <img src={articleGivenlar.logo} alt="" />
                              <div className="calc-currency-text">
                                <b>{articleGivenlar.currency}</b>
                                <span>{articleGivenlar.name}</span>
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
                                      setArticleGivenlar(el);
                                      setSelectedArticleRate(el.rate);
                                      setChekbox(false);
                                    }}
                                  >
                                    <img src={el.logo} alt="" />
                                    <div className="calc-currency-text">
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
                      <label className="getting-block" htmlFor="">
                        Вы получаете:
                        <span className="crypto_course">
                          {priceFiat / selectedArticleRate}
                        </span>
                      </label>
                      <div className="input_box d-f-sb">
                        <input
                          placeholder="0.00"
                          type="number"
                          value={priceFiat / selectedArticleRate}
                          onChange={(e) => setFiatChange(e.target.value)}
                        />
                        <div
                          className="crypto-select"
                          onClick={() => setChekboxOne(!chekboxOne)}
                        >
                          {fiatGivenlar && (
                            <div className="selected-item">
                              <img src={fiatGivenlar.logo} alt="" />
                              <div className="calc-currency-text">
                                <b>{fiatGivenlar.currency}</b>
                                <span>{fiatGivenlar.name}</span>
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
                                      setFiatGivenlar(el);
                                      setFiatRate(el.rate);
                                      setChekboxOne(false);
                                    }}
                                  >
                                    <img src={el.logo} alt="" />
                                    <div className="calc-currency-text">
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
                )}
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
