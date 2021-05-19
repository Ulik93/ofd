import React from "react";
import Count from "./Count";
import ofdphoto from "./img/ofd.png";
import "./counter.css";
const Counter = () => {
  return (
    <div>
      <div className="kassy__content-bottom">
        <div className="counter__wrapper">
          <img className="kassy__content-img" src={ofdphoto} alt="" />
         
          <div className="ofd__block">
    
            <h1 className="counter-1">
            <span>
                Чеков за сегодня
            </span>  <Count />
            </h1>
          
          </div>
          <div className="ofd__block">
    
    <h1 className="counter-1">
    <span>
        Чеков за все время
    </span>  <Count />
    </h1>
  
  </div>
        </div>
      </div>
    </div>
  );
};
export default Counter;
