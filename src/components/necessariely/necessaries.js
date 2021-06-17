import React from "react";
import "./index.css";
import image from "../header/logo.png";
import vid from "./files/video-chestznak.mp4";
export default function Necessaries() {
  return (
    <div className="wrapper">
      <div className="main_text">
        <h1>Обязательная маркировка товаров</h1>
        <p>
          Обязательная цифровая маркировка товаров для оптовой и розничной
          продажи начинается с 2021 года.
            </p>
      </div>

      <div className="necessary_flex">

        <div className="marking_flex">
          <div className="marking_child">
            <h3 className="marking_child-tittle">
              ОФД-НН уже участвует в проекте по маркировке
            </h3>
            <p>
              ОФД-НН принимает участие в экспериментах по цифровой маркировке
              товаров, интегрирован и активно взаимодействует по проекту
              маркировки с системой "Честный Знак", "Текшер". Приглашаем
              представителей оптовой и розничной торговли стать участниками
              пилотных проектов.
            </p>
            <div>
              <button className="ofd__section-btn knopka">
                Подробнее про маркировку
              </button>
            </div>

          </div>
        </div>
        <div className="marking_wrapper"> <div>
          <iframe width="100%" height="400px" src="https://www.youtube.com/embed/9smaOmkuNOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>{" "}</div>
      </div>
    </div>
  );
}
