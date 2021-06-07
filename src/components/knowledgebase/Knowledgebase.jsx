import React from "react";
import "./knowledgebase.css";
import logo from "./images/logo.png";

const Knowledgebase = () => {
  return (
    <div className="knowledgebase">
      <div className="knowledgebase__wrapper">
        <div className="knowledgebase__wrapper2">
          {/* <div className="header__logo">
            <img src={logo} alt="" />
          </div> */}
          <h1 className="knowledgebase__tittle"> База знаний</h1>
          <div className="knowledgebase__input">
            <input
              type="search"
              id="mySearch"
              placeholder="Поиск по базе знаний"
            />
          </div>
        </div>
        <div className="knowledgebase__container">
         
        </div>
      </div>
    </div>
  );
};
export default Knowledgebase;
