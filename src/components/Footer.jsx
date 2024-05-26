import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { SiTwitter } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_block_all">
        <div className="container">
          <div className="footer_block">
            <div className="footer_box1">
              <div className="logo_footer_img"></div>
              <p>
                Прозрачные комиссии, наличие лицензии, <br /> большие резервы и
                отличная репутация <br /> гарантируют успех <br /> ваших
                обменных операций!
              </p>
              <a href="">bitok@kg.com</a>
              <div className="social_network_block">
                <TiSocialFacebook className="i_icon" />
                <SiTwitter className="i_icon" />
                <FaSquareInstagram className="i_icon" />
                <SiTiktok className="i_icon" />
              </div>
            </div>
            <div className="footer_box2">
              <div className="footer_categoris">
                <div className="footer_categoris_box">
                  <p>Компания</p>
                  <span>О компании</span>
                  <span>Новости</span>
                  <span>Контакты</span>
                </div>
                <div className="footer_categoris_box">
                  <p>Основное</p>
                  <span>FAQ</span>
                  <span>Отзывы</span>
                </div>
                <div className="footer_categoris_box categories_box3">
                  <p>Политика</p>
                  <span>Политика конфиденциальности</span>
                  <span>Условия использования</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer_bottom">
        <p className="texting1">Все права защищены 2024 Bitok LLC</p>
        <p className="texting2">
          Made with ❤ by <a href="">NavisDevs</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
