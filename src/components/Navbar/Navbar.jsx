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
      <div className={active ? 'header__nav active' : 'header__nav close'}>
        <div className="header__nav-items">
          <NavLink onClick={changeBurger} to="/sd">Главная</NavLink>
        </div>
        <div className="header__nav-items">
          <NavLink onClick={changeBurger} to="/sd">Услуги</NavLink>
        </div>
        <div className="header__nav-items">
          <NavLink onClick={changeBurger} to="/kassa">Кассы</NavLink>
        </div>
        <div className="header__nav-items">
          <NavLink onClick={changeBurger} to="/knowledgebase">База знаний</NavLink>
        </div>
        <div className="header__nav-items">
          <NavLink onClick={changeBurger} to="/contactUs">Контакты</NavLink>
        </div>
        <div className="header__auth">
          <a className="header__auth-link" target="_blank" href="http://lk.norma.kg/login">
            Войти
          </a>
        </div>
      </div>
      <div className={active ? 'header__icon active' : 'header__icon'} onClick={changeBurger}>
        <span></span>
      </div>

    </div>

  );
};



export default Navbar;