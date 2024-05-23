import React, { useState } from "react";
import party_img from "../../assets/img/logo22.svg";

const CryptoConversion = () => {
  const [buy, setBuy] = useState(true);
  const [sel, setSel] = useState(false);

  const handleBuyClick = () => {
    setBuy(true);
    setSel(false);
  };
  const handleSellClick = () => {
    setBuy(false);
    setSel(true);
  };

  return (
    <div className="crypto-conversion">
      <div className="conditions-conversion">
        <div>
          <h1>
            Лучший сервис <br /> по продаже <br /> и покупке криптовалют
          </h1>
          <p>
            Ваш путь к свободе финансов и инновационным возможностям начинается
            здесь и сейчас. Добро пожаловать в мир криптовалюты!
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
                  <label htmlFor="">Вы отдаете:</label>
                  <div className="input_box d-f-sb">
                    <input placeholder="0.00" type="number" />
                    <div className="crypto-select"></div>
                  </div>
                </div>
                <div className="give-it-away-box">
                  <label htmlFor="">Вы получаете:</label>
                  <div className="input_box d-f-sb">
                    <input placeholder="0.00" type="number" />
                    <div className="crypto-select"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="buy-btn">Купить сейчас</button>
        </div>
      </div>
    </div>
  );
};

export default CryptoConversion;
