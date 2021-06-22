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
        <div className="counter-content">
            <div className="counter__1">
              <h1 className="counter__text">
                <h3 className="h3">              <CountDay /></h3>

                <span>Чеков за сегодня</span>
              </h1>
            </div>
            <img className="counter-content-img" src={img} alt="" />

            <div className="counter__2">
              <h1 className="counter__text">
                <CountYear />
                <span>Чеков за все время</span>

              </h1>
            </div>
          </div>
      </div>
    </div>
  );
};
export default Counter;
