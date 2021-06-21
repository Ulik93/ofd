import React, { useState } from "react";
import "./header.css";
import Navbar from "../Navbar/Navbar";
import logo from "./logo.png";
import Burger from "../Navbar/Burger";




const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="header">
        <div className="header__logo">
          <img src={logo} alt="#" />
        </div>
        <Burger />
         <Navbar />
      </div>
    </div>
  );
};

export default Header;
