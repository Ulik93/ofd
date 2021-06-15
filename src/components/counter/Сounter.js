import React from "react";
import CountDay from "./CountDay";
import ofdphoto from "./img/ofd.png";
import "./counter.sass";
import img from "./img/imm.png";
import CountYear from "./CountYear";
const Counter = () => {
  return (
    <div className="counter">
      <div className="kassy__content-bottom">
        <div className="counter__wrapper">
      <div className="counter-content">
          <div className="ofd__block">
            <h1 className="counter-1">
              <span>Чеков за сегодня</span>
              <CountDay />
            </h1>
          </div>
          <img className="counter-content-img" src={img} alt="" />

          <div className="ofd__block">
            <h1 className="counter-1">
              <span>Чеков за все время</span>
               <CountYear />
            </h1>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counter;
