import React, { useState } from "react";
import "../assets/css/app.css";
import logo from "../assets/img/bitokLogo.svg";
import { NavLink } from "react-router-dom";
import Language from "./Main/Language";
import { t } from "i18next";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="header d-f-center">
      <div className="container">
        <div className="nav_block d-f-sb">
          <div className="header_block d-f-center">
            <div onClick={() => setMenu(true)} className="burger">
              <div></div>
              <div></div>
              <div></div>
            </div>
            {menu && (
              <div className="menu">
                <div onClick={() => setMenu(false)} className="menu_not"></div>
                <div className="menu_container">
                  <IoCloseSharp
                    onClick={() => setMenu(false)}
                    className="close"
                  />
                  <NavLink
                    onClick={() => setMenu(false)}
                    to="/about"
                    className="page"
                  >
                    О нас
                  </NavLink>
                  <NavLink
                    onClick={() => setMenu(false)}
                    to="/projects"
                    className="page"
                  >
                    Проекты
                  </NavLink>
                  {/* <NavLink onClick={() => setMenu(false)} to="/" className="page">Партнеры</NavLink> */}
                  <NavLink
                    onClick={() => setMenu(false)}
                    to="/vacancy"
                    className="page"
                  >
                    Вакансии
                  </NavLink>
                  <NavLink
                    onClick={() => setMenu(false)}
                    to="/event"
                    className="page"
                  >
                    Мероприятия
                  </NavLink>
                  <NavLink
                    onClick={() => setMenu(false)}
                    to="/review"
                    className="page"
                  >
                    Отзывы
                  </NavLink>
                  <NavLink
                    onClick={() => setMenu(false)}
                    to="/contact"
                    className="page"
                  >
                    Контакты
                  </NavLink>
                </div>
              </div>
            )}
            <NavLink to="/" className="bitok_icon">
              <img src={logo} alt="Logo" />
            </NavLink>
            <div className="link-block d-f-center">
              <NavLink className="nav_page" to="/about">
                {t("about")}
              </NavLink>
              <NavLink className="nav_page" to="/news">
                Новости
              </NavLink>
              <NavLink className="nav_page" to="/contacts">
                {t("contacts")}
              </NavLink>
            </div>
          </div>
          <div className="language_registr_block d-f-center">
            <div className="lan_block">
              <Language />
            </div>
            <button className="login_btn">Войти</button>
            <button className="registr_btn">Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
