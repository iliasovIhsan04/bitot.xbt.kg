import React, { useState } from "react";
import "../assets/css/app.css";
import logo from "../assets/img/bitokLogo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="header d-f-center">
      <div className="container">
        <div className="nav_block d-f-sb">
          <div className="header_block d-f-center">
            <NavLink to="/" className="bitok_icon">
              <img src={logo} alt="Logo" />
            </NavLink>
            <div className="link-block d-f-center">
              <NavLink className="nav_page" to="/about">
                О компании
              </NavLink>
              <NavLink className="nav_page" to="/news">
                Новости
              </NavLink>
              <NavLink className="nav_page" to="/contacts">
                Контакты
              </NavLink>
            </div>
          </div>
          <div className="language_registr_block d-f-center">
            <div className="language_block"></div>
            <button className="login_btn">Войти</button>
            <button className="registr_btn">Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;