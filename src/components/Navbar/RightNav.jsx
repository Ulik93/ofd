import React from "react";

const RightNav = () => {
  return (
    <div>
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
        <a className="header__auth-link" href="#">
          Войти
        </a>
      </div>
    </div>
  );
};
export default RightNav;
