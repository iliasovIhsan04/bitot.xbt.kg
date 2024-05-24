import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdArrowOutward } from "react-icons/md";
import { url } from "../../Api";
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  const [selected, setSelected] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [dataFaq, setDataFaq] = useState([]);
  const [faq, setFaq] = useState([]);
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url + "/faq");
        setFaq(response.data);
      } catch (error) {
        console.log("Ошибка:", error);
      }
    };

    fetchData();
  }, []);

  const accumulatedData = [];
  for (const key in faq) {
    if (faq.hasOwnProperty(key)) {
      const accordionsData = faq[key];
      for (const key in accordionsData) {
        if (accordionsData.hasOwnProperty(key)) {
          const currency = accordionsData[key];
          accumulatedData.push(currency);
        }
      }
    }
  }
  const sanitizeData = (htmlString) => {
    return htmlString.replace(/<br\s*\/?>/g, "");
  };
  setTimeout(() => {
    if (one) setDataFaq(accumulatedData[0]);
  });

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div id="faq">
      <div className="container">
        <div className="questions__all">
          <div className="questions__faq">
              <div>
                <h1>Ответы на часто задаваемые вопросы</h1>
                <p>
                  Прозрачные комиссии, наличие большие резервы и отличная
                  репутация гарантируют успех ваших обменных операций!
                </p>
              <div className="question"></div>
            </div>
            <button
              onClick={() =>
                setOne(true) ||
                setTwo(false) ||
                setDataFaq(accumulatedData[0]) ||
                toggle()
              }
              className={one ? "btn btn-crypto-all" : "btn active"}
            >
              Посмотреть все
              <MdArrowOutward />
            </button>
          </div>
          <div className="clients__questions">
            {dataFaq ? (
              dataFaq.map((el, index) => {
                return (
                  <FaqAccordion
                    key={index}
                    question={el.question}
                    answer={sanitizeData(el.answer)}
                    isOpen={activeIndex === index}
                    onClick={() => handleItemClick(index)}
                  />
                );
              })
            ) : (
              <div className="loading_fag">loading</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
