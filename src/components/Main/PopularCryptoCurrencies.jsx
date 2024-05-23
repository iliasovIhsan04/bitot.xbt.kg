import React from "react";

const PopularCryptoCurrencies = () => {
  return (
    <div className="popular-crypto-currencies">
      <h2>Популярные криптовалюты</h2>
      <div className="popular-crypto-header">
        <p>Торговая пара</p>
        <p>Цена</p>
        <p>Объем 24ч (USDT)</p>
        <p>Рынок</p>
        <p className="action">Действие</p>
      </div>
    </div>
  );
};

export default PopularCryptoCurrencies;
