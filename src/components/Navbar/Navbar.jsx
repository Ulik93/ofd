import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./../header/header.css"



const Navbar = () => {
  const [active, setActive] = useState(false);

  function changeBurger() {
    setActive(prev => prev = !prev)
  }
  return (
    <div className="header__hamburger">
      <div className={active ? 'header__nav active' : 'header__nav'}>
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
      <div className="header__icon" onClick={changeBurger}>
        <i class="fas fa-bars"></i>
      </div>

    </div>

  );
};



export default Navbar;