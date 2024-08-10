import React, { useState } from "react";
import "../assets/css/app.css";
import logo from "../assets/img/bitokLogo.svg";
import logo_burger from "../assets/img/logoBurger.svg";
import { NavLink } from "react-router-dom";
import Language from "./Main/Language";
import { t } from "i18next";
import close from "../assets/img/close_modal.svg";

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
                  <div className="close-language-block">
                    <img
                      onClick={() => setMenu(false)}
                      className="close"
                      src={close}
                      alt=""
                    />
                    <div className="lan_bloc">
                      <Language />
                    </div>
                  </div>
                  <NavLink
                    className="page-burger"
                    to="/"
                    onClick={() => setMenu(false)}
                  >
                    {t("home")}
                  </NavLink>
                  <NavLink
                    className="page-burger"
                    to="/about-company"
                    onClick={() => setMenu(false)}
                  >
                    {t("about")}
                  </NavLink>
                  <NavLink
                    className="page-burger"
                    to="/news"
                    onClick={() => setMenu(false)}
                  >
                    {t("news")}
                  </NavLink>
                  <NavLink
                    className="page-burger"
                    to="/contacts"
                    onClick={() => setMenu(false)}
                  >
                    {t("contacts")}
                  </NavLink>
                </div>
              </div>
            )}
            <NavLink to="/" className="bitok_icon">
              <img src={logo} alt="Logo" />
            </NavLink>
            <NavLink to="/" className="bitok_icon_burger">
              <img src={logo_burger} alt="Logo" />
            </NavLink>
            <div className="link-block d-f-center">
              <NavLink className="nav_page" to="/">
                {t("home")}
              </NavLink>
              <NavLink className="nav_page" to="/about-company">
                {t("about")}
              </NavLink>
              <NavLink className="nav_page" to="/news">
                {t("news")}
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
