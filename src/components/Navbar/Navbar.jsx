import React from "react";
import { NavLink } from "react-router-dom";
import "./../header/header.css"
const Navbar = () => {
  return (
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
        <div className="header__auth">
          <a className="header__auth-link" target="_blank" href="http://lk.norma.kg/login">
            Войти
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;