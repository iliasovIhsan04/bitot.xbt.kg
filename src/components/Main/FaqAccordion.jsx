import React, { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function FaqAccordion({ answer, question, isOpen, onClick }) {
  const contentRef = useRef();
  return (
    <div>
      <div className={`wrapper ${isOpen ? "active" : ""}`}>
        <button
          className={`question-container d-f-sb ${isOpen ? "active" : ""}`}
          onClick={onClick}
        >
          <p className={`question-content ${isOpen ? "active" : ""}`}>
            {question}
          </p>
          <div className="arrow-cards d-f-center">
            <IoIosArrowDown className={`arrow ${isOpen ? "active" : ""}`} />
          </div>
        </button>
        <div
          ref={contentRef}
          className="answer-container"
          style={{
            maxHeight: isOpen ? contentRef.current.scrollHeight + "px" : "0px",
          }}
        >
          <p className="answer-content">{answer}</p>
        </div>
      </div>
    </div>
  );
}
