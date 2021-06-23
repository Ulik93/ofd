import React from "react";
import "./ofd.sass";
import w from "./iPhone.png";
const Ofd = () => {
  return (
    <div className="ofd">
      <div className="header__wrapper">
        <div className="ofd__section">
          <div className="ofd__section-about">
            <h1 className="ofd__section-tittle">ОФД-НН</h1>
            <p className="ofd__section-subtittle">
              Оператор фискальных данных ОФД-НН
              <br /> обрабатывает, хранит и передает информацию в
              государственную
              <br />
              налоговую службу, отправляет чеки покупателям.{" "}
            </p>
            <a target="_blank" href="http://lk.norma.kg/login">
            <button className="ofd__section-btn">Подключить</button>
            </a>
          </div>
          <div className="ofd__section-img">
            <img src={w} alt="Офд новая норма" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ofd;
