import React from "react";
import "./uslugi.sass";
import kassyphoto from "./img/kassyblock.png";
import Counter from "../counter/Сounter";
const Uslugi = () => {
  return (
    <>
      <div className="kassy__red"></div>
      <div className="kassy">
        <div className="header__wrapper">
          <div className="kassy__content">
            <div className="kassy__content-text">
              <h2 className="kassy__content-tittle">Комплекс услуг по ОФД</h2>
              <p className="kassy__content-subtittle">
                Онлайн-передача чеков, анализ <br /> продаж, мониторинг тоговых{" "}
                <br /> точек, поставка, настройка и <br /> обслуживание касс.
              </p>
              <img src="./img/8134901256.jpg" alt="" />
            </div>
            <div className="kassy__content-photo">
              <img src={kassyphoto} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Uslugi;
