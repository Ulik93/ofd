import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import Hamburger from "react-hamburgers";
import "./header.sass";

const Header = () => {
  const [isActive, setisActive] = useState(false);
  return (
    <div className="header__wrapper">
      <div className="header">
        <div className="header__logo">
          <img src={logo} alt="#" />
        </div>
        <div
          className={`header__menu ${isActive ? "header__menu-active" : ""}`}
        >
          <div className="header__auth">
            {/* <a className="header__auth-link" href="#">
              О нас
            </a> */}
            <a className="header__auth-link" href="#">
              Войти
            </a>
          </div>
          <div className="header__hamburger">
            <div className="header__nav">
              <div className="header__nav-items">
                <NavLink to="/sd">Главная</NavLink>
              </div>
              <div className="header__nav-items">
                <NavLink to="/sd">Услуги</NavLink>
              </div>
              <div className="header__nav-items">
                <NavLink to="/kassa">Кассы</NavLink>
              </div>
              <div className="header__nav-items">
                <NavLink to="/knowledgebase">База знаний</NavLink>
              </div>
              <div className="header__nav-items">
                <NavLink to="/contactUs">Контакты</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="header__burger">
          <Hamburger
            type="spring"
            active={isActive}
            onClick={() => {
              setisActive(!isActive);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
