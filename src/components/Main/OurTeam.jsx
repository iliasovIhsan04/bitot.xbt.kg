import React from "react";
import { MdArrowOutward } from "react-icons/md";

const OurTeam = () => {
  return (
    <div className="our-teams">
      <div className="our-team">
        <div className="container">
          <div className="our-team-block">
            <h2>
              Мы - ведущая компания в сфере <br /> криптовалют, с глубокими{" "}
              <br /> знаниями и опытом
            </h2>
            <div className="our-team-box">
              <p>
                Наша компания воплощает в себе <br /> инновационные подходы и
                передовые <br />
                технологии
              </p>
              <button className="btn-crypto-all">
                Подробнее <MdArrowOutward />
              </button>
            </div>
          </div>
          <div>
            <div className="grid-mob" style={{ marginTop: "30px" }}>
              <div className="our-team-the-information-box">
                <p>1</p>
                <div className="information-back-img information-box-img1"></div>
                <p>
                  Сертификат, лицензия <br /> и надежность
                </p>
              </div>
              <div className="our-team-the-information-box">
                <p>Прозрачные коммиссии, эффективная система платежей</p>
                <div className="information-back-img information-box-img2"></div>
                <p>2</p>
              </div>
              <div className="our-team-the-information-box">
                <p>3</p>
                <div className="information-back-img information-box-img3"></div>
                <p>Безопасность, защита финансовых данных</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
